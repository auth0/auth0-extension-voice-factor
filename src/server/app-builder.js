"use strict";

const url = require("url");
const crypto = require("crypto");

const ejs = require("ejs");
const request = require("request");
const base64url = require("base64-url");
const Express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Dicer = require("dicer");

const jwt = require("jsonwebtoken");

const mocks = require("./vit-api-mocks.js");
const elemental = require("./elemental-db.js");
const hooks = require("./installation-hooks.js");
const metadata = require("./../../webtask.json");

module.exports = function (files) {
  function decrypt(data, key) {
    if (!data || data.indexOf(":") === -1) {
      return "";
    }

    var parts = data.split(":");

    var key = new Buffer(key, "base64");
    var iv = new Buffer(parts[0], "base64");

    var cipher = crypto.createDecipheriv("aes-128-cbc", key, iv);

    return cipher.update(parts[1], "base64", "utf8") + cipher.final("utf8");
  }

  var config = {};
  config.signingKey = base64url.escape(crypto.randomBytes(32).toString("base64"));

  let app = new Express();

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/debug", (req, res) => res.json({}));

  app.post("/decrypt", (req, res) => {
    var plaintext, ciphertext, key;

    key = req.body.key;
    ciphertext = req.body.ciphertext;
    plaintext = decrypt(ciphertext, key);

    res.json({ plaintext });
  });

  app.get("/ping", (req, res) => res.send("PONG"));

  app.get("/meta", (req, res) => {
    res.status(200).send(metadata);
  });

  app.use("/", (req, res, next) => {
    // Ensure that database is available at the request level
    var schema = {
      config: { type: "singleton" },
      tokens: { type: "array" },
      sessions: { type: "map" },
    };

    var seed = { config: config, tokens: [], sessions: {} };

    if (req.webtaskContext.storage) {
      req.db = new elemental.WebtaskStorageElementalDB(req.webtaskContext.storage, schema, seed);
    } else {
      req.db = new elemental.JsonFileElementalDB("local-db.json", schema, seed);
    }

    // Provide absolute URL and absolute base URL
    var xfproto = req.get('x-forwarded-proto');
    var xfport = req.get('x-forwarded-port');

    req.absoluteUrl = [
      xfproto ? xfproto.split(',')[0].trim() : 'https',
      '://',
      req.get('Host'),
      //xfport ? ':' + xfport.split(',')[0].trim() : '',
      url.parse(req.originalUrl).pathname
    ].join('');

    req.absoluteBaseUrl = [
      xfproto ? xfproto.split(',')[0].trim() : 'https',
      '://',
      req.get('Host'),
      //xfport ? ':' + xfport.split(',')[0].trim() : '',
      url.parse(req.originalUrl).pathname.replace(url.parse(req.url).pathname, "")
    ].join('');

    // Make the global configuration available at the request level
    req.db.get(function (error, data) {
      if (error) { return next(error); }

      req.config = data.config;

      next();
    });
  });

  // Make the extension installation hooks available without session requirements
  app.use("/.extensions", hooks(files));

  // Make the mocks available without session requirements
  app.use("/vitmocks", mocks);

  // Ensure that the current request is either starting a session
  // or that the request is associated with a valid session
  app.use("/", (req, res, next) => {
    req.db.get(function (error, data) {
      if (error) { return next(error); }

      var token = req.query.token, state = req.query.state;

      if (token && state) {
        // Validate the token
        var payload = jwt.verify(token, req.config.signingKey, {
          algorithms: ["HS256"]
        });

        if (!payload.jti || data.tokens.indexOf(payload.jti) !== -1) {
          // The token either does not contain a jti claim or the token
          // was already used previously
          res.sendStatus(403);
          return;
        }

        setTimeout((db, jti) => db.remove({ tokens: [jti] }, () => { }), 1000 * 70, req.db, payload.jti);

        // Create a session identifier
        var sid = base64url.escape(crypto.randomBytes(32).toString("base64"));

        // Save the state and session identifier as cookies
        res.cookie("vf_sid", sid, { httpOnly: true, secure: true, path: url.parse(req.originalUrl).pathname });
        res.cookie("vf_state", state, { httpOnly: true, secure: true, path: url.parse(req.originalUrl).pathname });

        var session = {
          csrf: base64url.escape(crypto.randomBytes(16).toString("base64")),
          userId: payload.sub,
          vit: {
            id: payload.vit_id,
            secret: decrypt(payload.vit_secret, req.webtaskContext.data.ENCRYPTION_KEY),
            lang: payload.vit_lang,
            enrolled: payload.vit_enrolled,
            authenticated: false
          }
        };

        // Store session and token identifier
        req.db.add({ sessions: [{ id: sid, value: session }], tokens: [payload.jti] }, (error) => {
          if (error) { return next(error); }

          res.redirect(url.parse(req.originalUrl).pathname);
        });

        return;
      }

      var sid = req.cookies.vf_sid;

      req.session = sid ? data.sessions[sid] : null;

      if (!req.session) {
        res.sendStatus(403);
      } else {
        next();
      }
    });
  });

  // Process the application root
  app.get("/", (req, res) => {
    if (!req.originalUrl.endsWith("/")) {
      res.redirect(req.originalUrl + "/");
    }

    res.send(ejs.render(files["index.html"], req.session));
  });

  // Process requests to application resources
  app.get("/scripts.js", (req, res) => {
    res.setHeader('Content-Type', 'text/javascript');
    res.send(files["scripts.js"]);
  });
  app.get("/styles.css", (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.send(files["styles.css"]);
  });
  app.get("/logo.svg", (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.send(files["logo.svg"]);
  });

  // Process the request to continue the transaction at Auth0
  app.post("/continue", (req, res, next) => {
    var csrf = req.body.csrf_token;

    if (csrf !== req.session.csrf) {
      res.sendStatus(403);
    } else {
      var domain = req.webtaskContext.data.AUTH0_DOMAIN;

      // Get the session identifier and state from the cookies
      var sid = req.cookies.vf_sid;
      var state = req.cookies.vf_state;

      // Create a token based on current session state
      var claims = {
        sub: req.session.userId,
        nonce: state,
        vit_authenticated: req.session.vit.authenticated
      };

      var token = jwt.sign(claims, req.config.signingKey, { expiresIn: 60 });

      // Clear cookies
      var now = new Date();

      res.cookie("vf_sid", "", { httpOnly: true, secure: true, expires: now });
      res.cookie("vf_state", "", { httpOnly: true, secure: true, expires: now });

      // Remove session and redirect
      req.db.remove({ sessions: [{ id: sid }] }, (error) => {
        if (error) { return next(error); }

        // Redirect to Auth0 with JWT and state
        res.redirect(`https://${domain}/continue?state=${state}&token=${token}`);
      });
    }
  });

  // Require a CSRF token for all internal API requests
  app.use("/api/*", (req, res, next) => {
    var csrf = req.get("X-CSRF-Token");

    if (csrf !== req.session.csrf) {
      res.sendStatus(403);
    } else {
      next();
    }
  });

  // Create an helper regular expression to process multipart requests
  const RE_BOUNDARY = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i;

  // Process an enrollment request
  app.post("/api/enroll", (req, res, next) => {
    function enroll(buffer) {
      request({
        headers: {
          "Content-Type": 'audio/wav',
          "VsitEmail": req.session.vit.id,
          "VsitPassword": crypto.createHash('sha256').update(req.session.vit.secret).digest('hex'),
          "VsitDeveloperId": req.webtaskContext.data.VIT_DEVELOPER_ID,
          "ContentLanguage": req.session.vit.lang
        },
        uri: 'https://siv.voiceprintportal.com/sivservice/api/enrollments',
        // uri: `${req.absoluteBaseUrl}/vitmocks/enroll`,
        body: buffer,
        method: 'POST'
      }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          res.json(JSON.parse(body));
        } else {
          console.log(error);
          console.log(response.statusCode);
          res.sendStatus(400);
        }
      });
    }

    var parts = RE_BOUNDARY.exec(req.get("Content-Type"));

    var dicer = new Dicer({ boundary: parts[1] || parts[2] });

    dicer.on('part', function (part) {
      var buffers = [];

      part.on('data', function (data) {
        buffers.push(data);
      });
      part.on('end', function () {
        var buffer = Buffer.concat(buffers);

        if (!req.session.vit.created) {
          request({
            headers: {
              "Content-Length": "0",
              "Content-Type": "application/json",
              "VsitEmail": req.session.vit.id,
              "VsitPassword": crypto.createHash('sha256').update(req.session.vit.secret).digest('hex'),
              "VsitDeveloperId": req.webtaskContext.data.VIT_DEVELOPER_ID,
              "VsitFirstName": "User",
              "VsitLastName": req.session.userId
            },
            uri: 'https://siv.voiceprintportal.com/sivservice/api/users',
            // uri: `${req.absoluteBaseUrl}/vitmocks/createuser`,
            body: '',
            method: 'POST'
          }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
              var sid = req.cookies.vf_sid;

              req.session.vit.created = true;

              req.db.add({ sessions: [{ id: sid, value: req.session }] }, (error) => {
                if (error) { return next(error); }

                enroll(buffer);
              });
            } else {
              console.log(error);
              console.log(response.statusCode);
              res.sendStatus(400);
            }
          });
        } else {
          enroll(buffer);
        }
      });
    });

    req.pipe(dicer);
  });

  // Process an authentication request
  app.post("/api/authenticate", (req, res, next) => {
    var parts = RE_BOUNDARY.exec(req.get("Content-Type"));

    var dicer = new Dicer({ boundary: parts[1] || parts[2] });

    dicer.on('part', function (part) {
      var buffers = [];

      part.on('data', function (data) {
        buffers.push(data);
      });
      part.on('end', function () {
        var buffer = Buffer.concat(buffers);

        request({
          headers: {
            "Content-Type": 'audio/wav',
            "VsitEmail": req.session.vit.id,
            "VsitPassword": crypto.createHash('sha256').update(req.session.vit.secret).digest('hex'),
            "VsitDeveloperId": req.webtaskContext.data.VIT_DEVELOPER_ID,
            "VsitConfidence": "85",
            "ContentLanguage": req.session.vit.lang
          },
          uri: 'https://siv.voiceprintportal.com/sivservice/api/authentications',
          // uri: `${req.absoluteBaseUrl}/vitmocks/authenticate`,
          body: buffer,
          method: 'POST'
        }, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);

            if (result.ResponseCode === "SUC") {
              var sid = req.cookies.vf_sid;

              req.session.vit.authenticated = true;

              req.db.add({ sessions: [{ id: sid, value: req.session }] }, (error) => {
                if (error) { return next(error); }

                res.json(result);
              });
            } else {
              res.json(result);
            }
          } else {
            console.log(error);
            console.log(response.statusCode);
            res.sendStatus(400);
          }
        });
      });
    });

    req.pipe(dicer);
  });

  app.use(function (error, req, res, next) {
    console.log(error);
    res.sendStatus(500);
  })

  return app;
}
