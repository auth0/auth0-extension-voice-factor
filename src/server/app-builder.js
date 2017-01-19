"use strict";

const url = require("url");
const crypto = require("crypto");

const Handlebars = require("handlebars");
const request = require("request");
const base64url = require("base64-url");
const Express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Dicer = require("dicer");
const twilio = require("twilio");

const jwt = require("jsonwebtoken");

const mocks = require("./vit-api-mocks.js");
const elemental = require("./elemental-db.js");
const hooks = require("./installation-hooks.js");
const metadata = require("./../../webtask.json");

Handlebars.registerHelper("template-start", function (id) {
  return new Handlebars.SafeString(`<script type="text/x-template" id="${id}">`);
});

Handlebars.registerHelper("template-end", function () {
  return new Handlebars.SafeString('</script>');
});

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

const checks = {
  session: function (req, res, next) {
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
          phoneNumber: payload.phone_number,
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
      } else {
        var sid = req.cookies.vf_sid;

        req.session = sid ? data.sessions[sid] : null;

        if (!req.session) {
          res.sendStatus(403);
        } else {
          req.session.id = sid;

          next();
        }
      }
    });
  },
  csrf: (req, res, next) => {
    var csrf = req.get("X-CSRF-Token") || req.body.csrf_token;

    if (csrf !== req.session.csrf) {
      res.sendStatus(403);
    } else {
      next();
    }
  }
};

module.exports = function (files) {
  let app = new Express();

  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/debug", (req, res) => res.json({}));

  app.get("/ping", (req, res) => res.send("PONG"));

  app.post("/decrypt", (req, res) => {
    var plaintext, ciphertext, key;

    key = req.body.key;
    ciphertext = req.body.ciphertext;
    plaintext = decrypt(ciphertext, key);

    res.json({ plaintext });
  });

  app.get("/meta", (req, res) => {
    res.status(200).send(metadata);
  });

  app.use("/", (req, res, next) => {
    // Ensure that database is available at the request level
    var schema = {
      config: { type: "singleton" },
      tokens: { type: "array" },
      sessions: { type: "map" },
      calls: { type: "map" },
      calls_progress: { type: "map" }
    };

    var config = {};
    config.signingKey = base64url.escape(crypto.randomBytes(32).toString("base64"));

    var seed = { config: config, tokens: [], sessions: {}, calls: {} };

    if (req.webtaskContext.storage) {
      req.db = new elemental.WebtaskStorageElementalDB(req.webtaskContext.storage, schema, seed);
    } else {
      req.db = new elemental.JsonFileElementalDB("local-db.json", schema, seed);
    }

    // Provide base path, absolute URL and absolute base URL
    function escape(s) {
      return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    req.basePath = url.parse(req.originalUrl).pathname.replace(new RegExp(escape(url.parse(req.url).pathname) + "$"), "");

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
      req.basePath
    ].join('');

    // Make the global configuration available at the request level
    req.db.get(function (error, data) {
      if (error) { return next(error); }

      req.config = data.config;

      next();
    });
  });

  // Make the extension installation hooks available without
  // security checks as they do their own authentication
  app.use("/.extensions", hooks(files));

  // Make the mocks available publicly
  app.use("/vitmocks", mocks);

  // Process the application root
  app.get("/", checks.session, (req, res) => {
    if (!req.originalUrl.endsWith("/")) {
      res.redirect(req.originalUrl + "/");

      return;
    }

    res.send(Handlebars.compile(files["index.html"])({ csrf: req.session.csrf }));
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
  app.post("/continue", checks.session, checks.csrf, (req, res, next) => {
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

    // Remove session, any associated information and redirect
    var data = { sessions: [{ id: sid }] };

    if (req.session.cid) {
      data.calls = [{ id: req.session.cid }]
    }

    req.db.remove(data, (error) => {
      if (error) { return next(error); }

      // Redirect to Auth0 with JWT and state
      res.redirect(`https://${domain}/continue?state=${state}&token=${token}`);
    });
  });

  // Create an helper regular expression to process multipart requests
  const RE_BOUNDARY = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i;

  // Process an enrollment request
  app.post("/api/web/enroll", checks.session, checks.csrf, (req, res, next) => {
    function enroll(buffer) {
      request({
        headers: {
          "Content-Type": 'audio/wav',
          "VsitEmail": req.session.vit.id,
          "VsitPassword": crypto.createHash('sha256').update(req.session.vit.secret).digest('hex'),
          "VsitDeveloperId": req.webtaskContext.data.VIT_DEVELOPER_ID,
          "ContentLanguage": req.session.vit.lang
        },
        // uri: 'https://siv.voiceprintportal.com/sivservice/api/enrollments',
        uri: `${req.absoluteBaseUrl}/vitmocks/enroll`,
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
            // uri: 'https://siv.voiceprintportal.com/sivservice/api/users',
            uri: `${req.absoluteBaseUrl}/vitmocks/createuser`,
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
  app.post("/api/web/authenticate", checks.session, checks.csrf, (req, res, next) => {
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
          // uri: 'https://siv.voiceprintportal.com/sivservice/api/authentications',
          uri: `${req.absoluteBaseUrl}/vitmocks/authenticate`,
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

  app.get("/api/phone/call-progress/:cpid", checks.session, checks.csrf, (req, res, next) => {
    req.db.get(function (error, data) {
      if (error) { return next(error); }

      var cpid = req.params.cpid;

      var cid = data.calls_progress[cpid];

      if (!cid) {
        res.sendStatus(400);

        return;
      }

      res.json({ step: data.calls[cid].step });
    });
  });

  app.post("/api/phone/start-call", checks.session, checks.csrf, (req, res, next) => {
    var cid = base64url.escape(crypto.randomBytes(32).toString("base64"));
    var cpid = base64url.escape(crypto.randomBytes(16).toString("base64"));

    var data = {
      calls: [{ id: cid, value: { sid: req.session.id, step: 0 } }],
      calls_progress: [{ id: cpid, value: cid }]
    };

    req.db.add(data, (error) => {
      if (error) { return next(error); }

      const accountSid = req.webtaskContext.data.TWILIO_ACCOUNT_SID;
      const authToken = req.webtaskContext.data.TWILIO_AUTH_TOKEN;

      var client = twilio(accountSid, authToken);

      client.calls.create({
        url: `${req.absoluteBaseUrl}/api/phone/receive-call/${cid}`,
        to: req.session.phoneNumber,
        from: req.webtaskContext.data.TWILIO_OUTGOING_PHONE_NUMBER
      }, function (error, call) {
        if (error) { return next(error); }

        req.db.add({ calls: [{ id: cid, value: { sid: req.session.id, step: 1 } }] }, (error) => {
          if (error) { return next(error); }

          res.json({ cpid: cpid });
        });
      });
    });
  });

  app.post("/api/phone/receive-call/:cid", (req, res, next) => {
    console.log("receive-call: " + req.params.cid);

    req.db.get(function (error, data) {
      if (error) { return next(error); }

      var cid = req.params.cid;

      var call = data.calls[cid];

      if (!call) {
        // If the cid does not match an expected call fail the request
        res.sendStatus(403);

        return;
      }

      var twiml = new twilio.TwimlResponse();

      twiml.say("You have initiated a Voice Authentication process.");
      twiml.redirect(`${req.absoluteBaseUrl}/api/phone/authentication/record`);

      // Set Twilio session cookie
      res.cookie("tw_cid", cid, { httpOnly: true, secure: true });

      req.db.add({ calls: [{ id: cid, value: { sid: call.sid, step: 2 } }] }, (error) => {
        if (error) { return next(error); }

        res.send(twiml.toString());
      });
    });
  });

  app.post("/api/phone/authentication/record", (req, res, next) => {
    req.db.get(function (error, data) {
      if (error) { return next(error); }

      var cid = req.cookies.tw_cid;

      var call = data.calls[cid];

      if (!call) {
        // If the session call identifier does not match an expected call fail the request
        res.sendStatus(403);

        return;
      }

      var twiml = new twilio.TwimlResponse();

      twiml.say("Please say the following phrase to authenticate.");
      twiml.pause(1);
      twiml.say("Remember to wash your hands before eating.");

      twiml.record({
        action: `${req.absoluteBaseUrl}/api/phone/authentication/verify`,
        maxLength: "5",
        trim: "do-not-trim",
      });

      req.db.add({ calls: [{ id: cid, value: { sid: call.sid, step: 3 } }] }, (error) => {
        if (error) { return next(error); }

        res.send(twiml.toString());
      });
    });
  });

  app.post("/api/phone/authentication/verify", (req, res, next) => {
    req.db.get(function (error, data) {
      if (error) { return next(error); }

      var cid = req.cookies.tw_cid;

      var call = data.calls[cid];

      if (!call) {
        // If the session call identifier does not match an expected call fail the request
        res.sendStatus(403);

        return;
      }

      req.session = data.sessions[call.sid];

      var recordingURL = req.body.RecordingUrl + ".wav";

      var options = {
        headers: {
          "VsitEmail": req.session.vit.id,
          "VsitPassword": crypto.createHash("sha256").update(req.session.vit.secret).digest("hex"),
          "VsitDeveloperId": req.webtaskContext.data.VIT_DEVELOPER_ID,
          "VsitConfidence": "85",
          "VsitwavURL": recordingURL,
          "ContentLanguage": req.session.vit.lang
        },
        // uri: 'https://siv.voiceprintportal.com/sivservice/api/authentications/bywavurl',
        uri: `${req.absoluteBaseUrl}/vitmocks/authenticate`,
        method: "POST"
      };

      req.db.add({ calls: [{ id: cid, value: { sid: call.sid, step: 4 } }] }, (error) => {
        if (error) { return next(error); }

        request.post(options, function (error, response, body) {
          var twiml = new twilio.TwimlResponse();

          var progress = 0;

          if (!error && response.statusCode == 200) {
            var authenticationResponse = JSON.parse(body);
            var data = {};

            console.log(authenticationResponse);

            switch (authenticationResponse.Result) {
              case "Authentication failed.":
                progress--;

                twiml.say("Your authentication did not pass. Please try again.");
                twiml.redirect(`${req.absoluteBaseUrl}/api/phone/authentication/record`);
                break;

              default:
                progress++;

                req.session.cid = cid;
                req.session.vit.authenticated = true;
                data.sessions = [{ id: call.sid, value: req.session }];

                twiml.say(authenticationResponse.Result);
                break;
            }
          } else {
            progress--;

            twiml.say("API Error. Your authentication did not pass. Please try again.");
            twiml.redirect(`${req.absoluteBaseUrl}/api/phone/authentication/record`);

            console.log(new Error(response.statusCode, body));
          }

          data.calls = [{ id: cid, value: { sid: call.sid, step: 4 + progress } }];

          req.db.add(data, (error) => {
            if (error) { return next(error); }

            res.send(twiml.toString());
          });
        });
      });
    });
  });

  app.use(function (error, req, res, next) {
    console.log(error);
    res.sendStatus(500);
  })

  return app;
};
