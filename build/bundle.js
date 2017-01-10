module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var zlib = __webpack_require__(1);

	var Webtask = __webpack_require__(2);

	var files = __webpack_require__(3);
	var builder = __webpack_require__(4);

	var app = builder({
	    "index.html": zlib.unzipSync(new Buffer(files["index.html"], "base64"), 'utf-8').toString('utf8'),
	    "scripts.js": zlib.unzipSync(new Buffer(files["scripts.js"], "base64"), 'utf-8').toString('utf8'),
	    "styles.css": zlib.unzipSync(new Buffer(files["styles.css"], "base64"), 'utf-8').toString('utf8'),
	    "logo.svg": zlib.unzipSync(new Buffer(files["logo.svg"], "base64"), 'utf-8').toString('utf8'),
	    "mfa-redirect-rule.js": zlib.unzipSync(new Buffer(files["mfa-redirect-rule.js"], "base64"), 'utf-8').toString('utf8')
	});

	module.exports = Webtask.fromExpress(app);

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("zlib");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("webtask-tools");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
		"index.html": "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",
		"scripts.js": "H4sIAAAAAAAAC61XbYvjNhD+fnD/QfgWYnOxd48uFLLthyO7Vw563ZJkoXAcRZGVWLeOFCQ5uVLy3yvJ77IcO6HzYTe2ZkYzj2bmkf1NRpEkjAI/AP++fQOUHCAHCyz2jAo8ZzEGv5YrWpYv8/nTcjkDnvrl5e9PD2/f1LYcI8ZjQrdCWX79Vq1VW+UKvuRku8V8CtA6aO6gfexwTOBcRSA5JFSKdgxaYBYTNgOSZ7heqAPRQuGBbKFkPNpi+SIw/6K9+rbvKWDUrCwzhLCon584ZzxouaxyaJv4yheGu8AOskplYVLGXOVB8RHktsamXCldtLbT0rKPdmSHV//s9aFMDAS3R3iYDBgJCbn07+/u7rru8xPbKSTUiSmvPz2014tTiiT+IX1v8TR/Xjx+/uM34N+LwAseus5IrLwcCY3ZMRJYfqYS8wNMfUeljdrHA+/rAMNQPXmOnU9T8MGZXxsJRmMoITxAksJ1qlGsw1qnbO0MrUgGpRjyKh0S2yF0s1iuPi5WoMrF60bnOiu2992KaJ3HaKfeeD6dK1ZTzz7u5IhUL7AUR9isT0w8wDxMpgAHbfetXeqWZpnE7YO98b2YHCLlXGIqvSBKSIytzMSRSJQAv0A4ZQhqd1ECRdINEwoMvHe3mHKWpjvtdNYFSW37rqERRCJhR991VmvVb68doGO8gVkqezzDTCbKLcnjHOO9D7oCsWr/Ou7QtKvyjVKCXvv6pqEPU8xluBNbZbOHXMXnN9AuDepfxfy98WVCRDAdaoF6nkf7TCRVDXZbX6+8LH5XXaX+RkghIPHz+jtGUj07a1dlYaaYihxKyX1PcORNS0fdXZooZesdkZVhTITu6FhZb2Aq2mVbPpzceJeezgKuE9yQtD1925PXqDC+e1Qzppj0n4rH1lGUOhHc7zGN/crtezAJde6q72rUvzYOIMV0KxMQgg/f2uDcRPA7/OFbR5fxdAYm0S3ck6JtJtO2RoKhmjpi5pp73l/hfLn4FK7YK6bezECGBN/8Lc2LINJzMLDnsNVOKs1ZlbC1uOdMs+djrqNPzVIohofGxq0gzcrkz+flys5M5NQ8a5Q3x0K1tnPGjyosfdlwj+ZykOU7RM3rk3M7k5yeZ03NqLxbufWLMF394vVQSym6MBHLqFRV2amms5ZkA/zc8hdw35tKE0UEeRxq0s7NFF0DUoWLUiiEDthoxQyJkKhDBvpPuFaZ6f/3P9+BLce6xByDtZQTwKoexkRkjdULjrUpLo5ScCpCskhh0FM9+ntz619ys1Yp/exVbd6Y5sVNo0+1h2LM3aYudN1RlzupeKqXQO2E7fcnGwN79JgbTLP9zQtnDZc3oJRtCy0Xo2dSqnMfppsx+HkfKcjoK2VHmgcKGEIZ5ziOnFV/FYyNMuqjwEbt4nEXD0P0BgpV/cUdok1Fttvz95POvSR3Pngt6TsOdzePYO9KbQSDaxnD4u67kpustTQJu4mhTW5azlG3lmvoW4vdR1rO0riWQSrXMkjnWs5QupbLaN1YXMHNJtor+FmLwVllSmiG9ReCuU6cHXFazs91LcOz3fi5dErZofe27mVzf9DdeAZowuNac7Clq4Yv4AMtozjBhHYN4sNIX8oQg16HAbeAPI35hmpthyBFOB3z6drfIO5vtP/N8ykwz/8BZp5bDPkUAAA=",
		"styles.css": "H4sIAAAAAAAAC2WQywrCQAxF94X+Q8CtFh+I0H5NOhPa0ZmkxOlCxH83Wuozq4Qc7gmpjmNqJasw9Fu4Qovu1KmM7FdOomgNWZHPAypxbuBWFmVROeFso+EDeh+4q2ENW0rzPmO7ejFlAVYJtQtsXLWnBOumLJ7ooDQT/+YF7WhPh2bav1WPiDkARx/EDpkYH85DxEsNbRR3ar7Vm09xhZE0L83BKjEmO9UGHHNvXXCYg33k+pPKwjQH3AHnG9XkOQEAAA==",
		"logo.svg": "H4sIAAAAAAAAC31U246bMBB9br8CsS+tZIyxudjkstpuW7VSVupT1LcoS0hASyECNpeu+u89NiQbtlGDFI5mPHPOXMz49vCrsHZp3eRVObE9ymzrdjpudhsrX03s2fKY1gvPtpr2WKQTOy2Xj0XqPC6Tp01dPZeruEz3FsPjiYgK/CsqRvZlQgTv8nT/qTpM7DcHbQvkcbNdJki9rdMmrXepMZbNxM7adhu77n6/p3tBq3rjcsaYC2n9kfhQ5OXTtYOeUso1Xhu1aOlWe9yCpE0PrZs0jT19/442LXtZ50UR3/B7eXd3N/pjjN5LBUV5e4wZ9dQoKfKts122WfxcFx9ufj7Mvn9eRGrxcdTFsohJJvtY3if8an69UZxYeMTlFxjHrtE0HSd5nUBbUiwbFAw9tpWgTaGkHOgIpGhom0l0vNxnC9uq4QhxxJ2ONxfOIFig3FW6bl4zd9n869mCcJjM7WNR8Q8UfHES9SL1c5OeFqHChNdFtY93eZNjJTBz0+84q9P1xL55JdB5Txmn421VHDdV+VqydykIWwFF2yovWzgjRiURjAbYlpB6RHpUAgoaEk8EwFJSRbRBWQF8xGOBhSBOFJbLsgz1Bpy6ljMhOgu+h5CRwKc849jQOZYxShhhDqO+oyh3PEaFBo1GEelNBsz6yN+DuUhmKr1KFQgakADLdH9G5AoqGOE+DbUOoovwhP4LwaqRZSUGM2Nyzk6D5jq+C+yezBFDw473BkdzeihaB4YGJU4Iu66R01DXqZzAEDoeugCr45s32P4h+qblD1sRRf9phaI+CULdd079HQoQ53oxMwdyDEg0UlClDc7Jo8FcR78h9A1hnSbtgDBL803W4hvk0WAQEOKiWPt81WYTW9AIq2tuCe4GLomMustwXX+/ZpmQGKdUev9YQCJOpCIn51BdfweG6USXLgoxgiCiMsN05hHvB6QIsjsQhLexER+D5rp12E85O4e9YRLdbcMXcvoXoy5XZ9gFAAA=",
		"mfa-redirect-rule.js": "H4sIAAAAAAAAC6VXbW/bNhD+PmD/4arlg4w6SlNsWefBaNPUaINmaRAvA4phcGn5ZDORSY2knHip//uO1Lstxy6qD4Is3/vz3PEUpSI0XApYSB5ixEIjlZ9qVF0IpTD4YOiBxfGYhXcdePzxB6BrwRSEapkYCX1Q+G/KFfpe9sbr/F4J3d6busStluIex0beoXjza3Ac/Oaka0aliPiUVHJH9tJ8KriYfsRlD7yDx+H5+8vzy/ejj4PPo6uL07PBh08X7wbXK69bqaBwsVBahdbg8uz689Wf558un1Z8MCg06d2o2OmdXl2Nbq4vmgqZ/KqMPCpqmPv1J8ywTj0Hm9sdLikxgffwNo0iVH6WbNAItgvemGk8+bksY6HOF6SdlThQTEzk/O3SoPaPT6oSlmXkyQxVJR8qZAbP3Fu+8D2G+vD45avDcBx6XRtYl8xvmskjw4m15JSDNKHc0CVIoaYmeuW1h1zpPi+VIy5Y7NelK3mFJlUCvhw88kVg5NAowrySXfUOHkuTqy+5o1Vh4egIhoYpA+MlhDMM70gZeAT3CEwhzKhesX3FyM+EqBiaktSZAZL1c74HiZJGhjKGfr8PXqFwWCh4DWSt4jPbL8EcDbN1CRbcjFAoGcdzFKYhncd6jSHyRRZQYRYiqeinNQVmxgzdEFQaI0z4BIQ0ro1QmyoFLYF6QypsOshLWRj2RRrHXWj0dB2p1Trsrj0t5Hk9cr8B3dUycP+ucVMbIsVWDfdvA2yjlutVsWYStowls2yjuREsiKvR0nf+uvlkCKph0F23YC8WT6XiZjbXPfjb+zB8+cuJ909TbNXkXYFh7jvQ6RieEe4OUnsb8ckGhK1Vpsa+ESw1M4rgP5wMlKJJ6t1YPOdcz5kJZ4HXqVd+o/oloYpoLJWsSeIRD6mK3x9KQaZQzpMYCbWaeRpB+0ZYBCikCNEVzKH8PeENUdvJC9SrOQW/uWxP9WFQZNxew/1UiZpGpbjBIHvZhF44yuh8TJ4myR+5Rb/Op27TWyewCPjlKeK3BmivfVu6rFInCG0Ba7ZRqd3mrVCruXUUAGONe2G+O+BVbSSBC9tFKzfj3ZfvAh8SmpMEW8R4nCpcI1LucTMLN4yUJP7ZqXaVPdFU0zJeoH/cnCA0zwdCk/Vsds+Yhr/sLnVuJ3VsmxYKpCslRwCWJKPiL+i3vPv6FR5XDWcVzeuCu46cXQrNhav0Nek1xiA8B+8NKQZcLFjMJ/XFqbg00q5heuUm1LKwnHRq5/sMHwiTFkMxE9OUTZG2MBSHN8M2Z2Vb9ghggnCNTxtdWkH6zb1aL97Ww5OYcEbc5iKlsRoZIsOdkPf2mHcHegmrpcgYacBpNJV2Ht3OYeD2h3wDsDtCtjFI91zur5uHaxgzPtftSNOh14S6pdiCzTEXso8tEreG97ZsqOuIt2hbRpaMe4KrQWt0Vqbg3k4LmeAWK5Z4e9go+LnFSiaJ++RTsngXfeu7mV2Q7C7kZ7C270dEh4R4os9FD05etG0+1mSxTtInT7bCuY+S2ofQhlZdg7Z777WLqu/RgFjfDlvE9y8IvAbvp6PmguJBz76sxL2N8KotNO8S4jyk9oOuHslmffdemPc7VbedpuUpSrNj9T/GRAPIfw8AAA=="
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var url = __webpack_require__(5);
	var crypto = __webpack_require__(6);

	var ejs = __webpack_require__(7);
	var request = __webpack_require__(8);
	var base64url = __webpack_require__(9);
	var Express = __webpack_require__(10);
	var bodyParser = __webpack_require__(11);
	var cookieParser = __webpack_require__(12);
	var Dicer = __webpack_require__(13);

	var jwt = __webpack_require__(21);

	var mocks = __webpack_require__(22);
	var elemental = __webpack_require__(23);
	var hooks = __webpack_require__(25);
	var metadata = __webpack_require__(30);

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

	  var app = new Express();

	  app.use(cookieParser());
	  app.use(bodyParser.urlencoded({ extended: true }));

	  app.get("/debug", function (req, res) {
	    return res.json({});
	  });

	  app.post("/decrypt", function (req, res) {
	    var plaintext, ciphertext, key;

	    key = req.body.key;
	    ciphertext = req.body.ciphertext;
	    plaintext = decrypt(ciphertext, key);

	    res.json({ plaintext: plaintext });
	  });

	  app.get("/ping", function (req, res) {
	    return res.send("PONG");
	  });

	  app.get("/meta", function (req, res) {
	    res.status(200).send(metadata);
	  });

	  app.use("/", function (req, res, next) {
	    // Ensure that database is available at the request level
	    var schema = {
	      config: { type: "singleton" },
	      tokens: { type: "array" },
	      sessions: { type: "map" }
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

	    req.absoluteUrl = [xfproto ? xfproto.split(',')[0].trim() : 'https', '://', req.get('Host'),
	    //xfport ? ':' + xfport.split(',')[0].trim() : '',
	    url.parse(req.originalUrl).pathname].join('');

	    req.absoluteBaseUrl = [xfproto ? xfproto.split(',')[0].trim() : 'https', '://', req.get('Host'),
	    //xfport ? ':' + xfport.split(',')[0].trim() : '',
	    url.parse(req.originalUrl).pathname.replace(url.parse(req.url).pathname, "")].join('');

	    // Make the global configuration available at the request level
	    req.db.get(function (error, data) {
	      if (error) {
	        return next(error);
	      }

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
	  app.use("/", function (req, res, next) {
	    req.db.get(function (error, data) {
	      if (error) {
	        return next(error);
	      }

	      var token = req.query.token,
	          state = req.query.state;

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

	        setTimeout(function (db, jti) {
	          return db.remove({ tokens: [jti] }, function () {});
	        }, 1000 * 70, req.db, payload.jti);

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
	        req.db.add({ sessions: [{ id: sid, value: session }], tokens: [payload.jti] }, function (error) {
	          if (error) {
	            return next(error);
	          }

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
	  app.get("/", function (req, res) {
	    if (!req.originalUrl.endsWith("/")) {
	      res.redirect(req.originalUrl + "/");
	    }

	    res.send(ejs.render(files["index.html"], req.session));
	  });

	  // Process requests to application resources
	  app.get("/scripts.js", function (req, res) {
	    res.setHeader('Content-Type', 'text/javascript');
	    res.send(files["scripts.js"]);
	  });
	  app.get("/styles.css", function (req, res) {
	    res.setHeader('Content-Type', 'text/css');
	    res.send(files["styles.css"]);
	  });
	  app.get("/logo.svg", function (req, res) {
	    res.setHeader('Content-Type', 'image/svg+xml');
	    res.send(files["logo.svg"]);
	  });

	  // Process the request to continue the transaction at Auth0
	  app.post("/continue", function (req, res, next) {
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
	      req.db.remove({ sessions: [{ id: sid }] }, function (error) {
	        if (error) {
	          return next(error);
	        }

	        // Redirect to Auth0 with JWT and state
	        res.redirect("https://" + domain + "/continue?state=" + state + "&token=" + token);
	      });
	    }
	  });

	  // Require a CSRF token for all internal API requests
	  app.use("/api/*", function (req, res, next) {
	    var csrf = req.get("X-CSRF-Token");

	    if (csrf !== req.session.csrf) {
	      res.sendStatus(403);
	    } else {
	      next();
	    }
	  });

	  // Create an helper regular expression to process multipart requests
	  var RE_BOUNDARY = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i;

	  // Process an enrollment request
	  app.post("/api/enroll", function (req, res, next) {
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

	              req.db.add({ sessions: [{ id: sid, value: req.session }] }, function (error) {
	                if (error) {
	                  return next(error);
	                }

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
	  app.post("/api/authenticate", function (req, res, next) {
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

	              req.db.add({ sessions: [{ id: sid, value: req.session }] }, function (error) {
	                if (error) {
	                  return next(error);
	                }

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
	  });

	  return app;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("url");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("crypto");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("ejs");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("base64-url");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var WritableStream = __webpack_require__(14).Writable
	                     || __webpack_require__(15).Writable,
	    inherits = __webpack_require__(16).inherits;

	var StreamSearch = __webpack_require__(17);

	var PartStream = __webpack_require__(19),
	    HeaderParser = __webpack_require__(20);

	var DASH = 45,
	    B_ONEDASH = new Buffer('-'),
	    B_CRLF = new Buffer('\r\n'),
	    EMPTY_FN = function() {};

	function Dicer(cfg) {
	  if (!(this instanceof Dicer))
	    return new Dicer(cfg);
	  WritableStream.call(this, cfg);

	  if (!cfg || (!cfg.headerFirst && typeof cfg.boundary !== 'string'))
	    throw new TypeError('Boundary required');

	  if (typeof cfg.boundary === 'string')
	    this.setBoundary(cfg.boundary);
	  else
	    this._bparser = undefined;

	  this._headerFirst = cfg.headerFirst;

	  var self = this;

	  this._dashes = 0;
	  this._parts = 0;
	  this._finished = false;
	  this._realFinish = false;
	  this._isPreamble = true;
	  this._justMatched = false;
	  this._firstWrite = true;
	  this._inHeader = true;
	  this._part = undefined;
	  this._cb = undefined;
	  this._ignoreData = false;
	  this._partOpts = (typeof cfg.partHwm === 'number'
	                    ? { highWaterMark: cfg.partHwm }
	                    : {});
	  this._pause = false;

	  this._hparser = new HeaderParser(cfg);
	  this._hparser.on('header', function(header) {
	    self._inHeader = false;
	    self._part.emit('header', header);
	  });

	}
	inherits(Dicer, WritableStream);

	Dicer.prototype.emit = function(ev) {
	  if (ev === 'finish' && !this._realFinish) {
	    if (!this._finished) {
	      var self = this;
	      process.nextTick(function() {
	        self.emit('error', new Error('Unexpected end of multipart data'));
	        if (self._part && !self._ignoreData) {
	          var type = (self._isPreamble ? 'Preamble' : 'Part');
	          self._part.emit('error', new Error(type + ' terminated early due to unexpected end of multipart data'));
	          self._part.push(null);
	          process.nextTick(function() {
	            self._realFinish = true;
	            self.emit('finish');
	            self._realFinish = false;
	          });
	          return;
	        }
	        self._realFinish = true;
	        self.emit('finish');
	        self._realFinish = false;
	      });
	    }
	  } else
	    WritableStream.prototype.emit.apply(this, arguments);
	};

	Dicer.prototype._write = function(data, encoding, cb) {
	  // ignore unexpected data (e.g. extra trailer data after finished)
	  if (!this._hparser && !this._bparser)
	    return cb();

	  if (this._headerFirst && this._isPreamble) {
	    if (!this._part) {
	      this._part = new PartStream(this._partOpts);
	      if (this._events.preamble)
	        this.emit('preamble', this._part);
	      else
	        this._ignore();
	    }
	    var r = this._hparser.push(data);
	    if (!this._inHeader && r !== undefined && r < data.length)
	      data = data.slice(r);
	    else
	      return cb();
	  }

	  // allows for "easier" testing
	  if (this._firstWrite) {
	    this._bparser.push(B_CRLF);
	    this._firstWrite = false;
	  }

	  this._bparser.push(data);

	  if (this._pause)
	    this._cb = cb;
	  else
	    cb();
	};

	Dicer.prototype.reset = function() {
	  this._part = undefined;
	  this._bparser = undefined;
	  this._hparser = undefined;
	};

	Dicer.prototype.setBoundary = function(boundary) {
	  var self = this;
	  this._bparser = new StreamSearch('\r\n--' + boundary);
	  this._bparser.on('info', function(isMatch, data, start, end) {
	    self._oninfo(isMatch, data, start, end);
	  });
	};

	Dicer.prototype._ignore = function() {
	  if (this._part && !this._ignoreData) {
	    this._ignoreData = true;
	    this._part.on('error', EMPTY_FN);
	    // we must perform some kind of read on the stream even though we are
	    // ignoring the data, otherwise node's Readable stream will not emit 'end'
	    // after pushing null to the stream
	    this._part.resume();
	  }
	};

	Dicer.prototype._oninfo = function(isMatch, data, start, end) {
	  var buf, self = this, i = 0, r, ev, shouldWriteMore = true;

	  if (!this._part && this._justMatched && data) {
	    while (this._dashes < 2 && (start + i) < end) {
	      if (data[start + i] === DASH) {
	        ++i;
	        ++this._dashes;
	      } else {
	        if (this._dashes)
	          buf = B_ONEDASH;
	        this._dashes = 0;
	        break;
	      }
	    }
	    if (this._dashes === 2) {
	      if ((start + i) < end && this._events.trailer)
	        this.emit('trailer', data.slice(start + i, end));
	      this.reset();
	      this._finished = true;
	      // no more parts will be added
	      if (self._parts === 0) {
	        self._realFinish = true;
	        self.emit('finish');
	        self._realFinish = false;
	      }
	    }
	    if (this._dashes)
	      return;
	  }
	  if (this._justMatched)
	    this._justMatched = false;
	  if (!this._part) {
	    this._part = new PartStream(this._partOpts);
	    this._part._read = function(n) {
	      self._unpause();
	    };
	    ev = this._isPreamble ? 'preamble' : 'part';
	    if (this._events[ev])
	      this.emit(ev, this._part);
	    else
	      this._ignore();
	    if (!this._isPreamble)
	      this._inHeader = true;
	  }
	  if (data && start < end && !this._ignoreData) {
	    if (this._isPreamble || !this._inHeader) {
	      if (buf)
	        shouldWriteMore = this._part.push(buf);
	      shouldWriteMore = this._part.push(data.slice(start, end));
	      if (!shouldWriteMore)
	        this._pause = true;
	    } else if (!this._isPreamble && this._inHeader) {
	      if (buf)
	        this._hparser.push(buf);
	      r = this._hparser.push(data.slice(start, end));
	      if (!this._inHeader && r !== undefined && r < end)
	        this._oninfo(false, data, start + r, end);
	    }
	  }
	  if (isMatch) {
	    this._hparser.reset();
	    if (this._isPreamble)
	      this._isPreamble = false;
	    else {
	      ++this._parts;
	      this._part.on('end', function() {
	        if (--self._parts === 0) {
	          if (self._finished) {
	            self._realFinish = true;
	            self.emit('finish');
	            self._realFinish = false;
	          } else {
	            self._unpause();
	          }
	        }
	      });
	    }
	    this._part.push(null);
	    this._part = undefined;
	    this._ignoreData = false;
	    this._justMatched = true;
	    this._dashes = 0;
	  }
	};

	Dicer.prototype._unpause = function() {
	  if (!this._pause)
	    return;

	  this._pause = false;
	  if (this._cb) {
	    var cb = this._cb;
	    this._cb = undefined;
	    cb();
	  }
	};

	module.exports = Dicer;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("stream");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("readable-stream");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
	  by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
	*/
	var EventEmitter = __webpack_require__(18).EventEmitter,
	    inherits = __webpack_require__(16).inherits;

	function jsmemcmp(buf1, pos1, buf2, pos2, num) {
	  for (var i = 0; i < num; ++i, ++pos1, ++pos2)
	    if (buf1[pos1] !== buf2[pos2])
	      return false;
	  return true;
	}

	function SBMH(needle) {
	  if (typeof needle === 'string')
	    needle = new Buffer(needle);
	  var i, j, needle_len = needle.length;

	  this.maxMatches = Infinity;
	  this.matches = 0;

	  this._occ = new Array(256);
	  this._lookbehind_size = 0;
	  this._needle = needle;
	  this._bufpos = 0;

	  this._lookbehind = new Buffer(needle_len);

	  // Initialize occurrence table.
	  for (j = 0; j < 256; ++j)
	    this._occ[j] = needle_len;

	  // Populate occurrence table with analysis of the needle,
	  // ignoring last letter.
	  if (needle_len >= 1) {
	    for (i = 0; i < needle_len - 1; ++i)
	      this._occ[needle[i]] = needle_len - 1 - i;
	  }
	}
	inherits(SBMH, EventEmitter);

	SBMH.prototype.reset = function() {
	  this._lookbehind_size = 0;
	  this.matches = 0;
	  this._bufpos = 0;
	};

	SBMH.prototype.push = function(chunk, pos) {
	  var r, chlen;
	  if (!Buffer.isBuffer(chunk))
	    chunk = new Buffer(chunk, 'binary');
	  chlen = chunk.length;
	  this._bufpos = pos || 0;
	  while (r !== chlen && this.matches < this.maxMatches)
	    r = this._sbmh_feed(chunk);
	  return r;
	};

	SBMH.prototype._sbmh_feed = function(data) {
	  var len = data.length, needle = this._needle, needle_len = needle.length;

	  // Positive: points to a position in `data`
	  //           pos == 3 points to data[3]
	  // Negative: points to a position in the lookbehind buffer
	  //           pos == -2 points to lookbehind[lookbehind_size - 2]
	  var pos = -this._lookbehind_size,
	      last_needle_char = needle[needle_len - 1],
	      occ = this._occ,
	      lookbehind = this._lookbehind;

	  if (pos < 0) {
	    // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
	    // search with character lookup code that considers both the
	    // lookbehind buffer and the current round's haystack data.
	    //
	    // Loop until
	    //   there is a match.
	    // or until
	    //   we've moved past the position that requires the
	    //   lookbehind buffer. In this case we switch to the
	    //   optimized loop.
	    // or until
	    //   the character to look at lies outside the haystack.
	    while (pos < 0 && pos <= len - needle_len) {
	       var ch = this._sbmh_lookup_char(data, pos + needle_len - 1);

	      if (ch === last_needle_char
	          && this._sbmh_memcmp(data, pos, needle_len - 1)) {
	        this._lookbehind_size = 0;
	        ++this.matches;
	        if (pos > -this._lookbehind_size)
	          this.emit('info', true, lookbehind, 0, this._lookbehind_size + pos);
	        else
	          this.emit('info', true);

	        this._bufpos = pos + needle_len;
	        return pos + needle_len;
	      } else
	        pos += occ[ch];
	    }

	    // No match.

	    if (pos < 0) {
	      // There's too few data for Boyer-Moore-Horspool to run,
	      // so let's use a different algorithm to skip as much as
	      // we can.
	      // Forward pos until
	      //   the trailing part of lookbehind + data
	      //   looks like the beginning of the needle
	      // or until
	      //   pos == 0
	      while (pos < 0 && !this._sbmh_memcmp(data, pos, len - pos))
	        pos++;
	    }

	    if (pos >= 0) {
	      // Discard lookbehind buffer.
	      this.emit('info', false, lookbehind, 0, this._lookbehind_size);
	      this._lookbehind_size = 0;
	    } else {
	      // Cut off part of the lookbehind buffer that has
	      // been processed and append the entire haystack
	      // into it.
	      var bytesToCutOff = this._lookbehind_size + pos;

	      if (bytesToCutOff > 0) {
	        // The cut off data is guaranteed not to contain the needle.
	        this.emit('info', false, lookbehind, 0, bytesToCutOff);
	      }

	      lookbehind.copy(lookbehind, 0, bytesToCutOff,
	                      this._lookbehind_size - bytesToCutOff);
	      this._lookbehind_size -= bytesToCutOff;

	      data.copy(lookbehind, this._lookbehind_size);
	      this._lookbehind_size += len;

	      this._bufpos = len;
	      return len;
	    }
	  }

	  if (pos >= 0)
	    pos += this._bufpos;

	  // Lookbehind buffer is now empty. Perform Boyer-Moore-Horspool
	  // search with optimized character lookup code that only considers
	  // the current round's haystack data.
	  while (pos <= len - needle_len) {
	    var ch = data[pos + needle_len - 1];

	    if (ch === last_needle_char
	        && data[pos] === needle[0]
	        && jsmemcmp(needle, 0, data, pos, needle_len - 1)) {
	      ++this.matches;
	      if (pos > 0)
	        this.emit('info', true, data, this._bufpos, pos);
	      else
	        this.emit('info', true);

	      this._bufpos = pos + needle_len;
	      return pos + needle_len;
	    } else
	      pos += occ[ch];
	  }

	  // There was no match. If there's trailing haystack data that we cannot
	  // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
	  // data is less than the needle size) then match using a modified
	  // algorithm that starts matching from the beginning instead of the end.
	  // Whatever trailing data is left after running this algorithm is added to
	  // the lookbehind buffer.
	  if (pos < len) {
	    while (pos < len && (data[pos] !== needle[0]
	                         || !jsmemcmp(data, pos, needle, 0, len - pos))) {
	      ++pos;
	    }
	    if (pos < len) {
	      data.copy(lookbehind, 0, pos, pos + (len - pos));
	      this._lookbehind_size = len - pos;
	    }
	  }

	  // Everything until pos is guaranteed not to contain needle data.
	  if (pos > 0)
	    this.emit('info', false, data, this._bufpos, pos < len ? pos : len);

	  this._bufpos = len;
	  return len;
	};

	SBMH.prototype._sbmh_lookup_char = function(data, pos) {
	  if (pos < 0)
	    return this._lookbehind[this._lookbehind_size + pos];
	  else
	    return data[pos];
	}

	SBMH.prototype._sbmh_memcmp = function(data, pos, len) {
	  var i = 0;

	  while (i < len) {
	    if (this._sbmh_lookup_char(data, pos + i) === this._needle[i])
	      ++i;
	    else
	      return false;
	  }
	  return true;
	}

	module.exports = SBMH;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(16).inherits,
	    ReadableStream = __webpack_require__(14).Readable || __webpack_require__(15);

	function PartStream(opts) {
	  ReadableStream.call(this, opts);
	}
	inherits(PartStream, ReadableStream);

	PartStream.prototype._read = function(n) {};

	module.exports = PartStream;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var EventEmitter = __webpack_require__(18).EventEmitter,
	    inherits = __webpack_require__(16).inherits;

	var StreamSearch = __webpack_require__(17);

	var B_DCRLF = new Buffer('\r\n\r\n'),
	    RE_CRLF = /\r\n/g,
	    RE_HDR = /^([^:]+):[ \t]?([\x00-\xFF]+)?$/,
	    MAX_HEADER_PAIRS = 2000, // from node's http.js
	    MAX_HEADER_SIZE = 80 * 1024; // from node's http_parser

	function HeaderParser(cfg) {
	  EventEmitter.call(this);

	  var self = this;
	  this.nread = 0;
	  this.maxed = false;
	  this.npairs = 0;
	  this.maxHeaderPairs = (cfg && typeof cfg.maxHeaderPairs === 'number'
	                         ? cfg.maxHeaderPairs
	                         : MAX_HEADER_PAIRS);
	  this.buffer = '';
	  this.header = {};
	  this.finished = false;
	  this.ss = new StreamSearch(B_DCRLF);
	  this.ss.on('info', function(isMatch, data, start, end) {
	    if (data && !self.maxed) {
	      if (self.nread + (end - start) > MAX_HEADER_SIZE) {
	        end = (MAX_HEADER_SIZE - self.nread);
	        self.nread = MAX_HEADER_SIZE;
	      } else
	        self.nread += (end - start);

	      if (self.nread === MAX_HEADER_SIZE)
	        self.maxed = true;

	      self.buffer += data.toString('binary', start, end);
	    }
	    if (isMatch)
	      self._finish();
	  });
	}
	inherits(HeaderParser, EventEmitter);

	HeaderParser.prototype.push = function(data) {
	  var r = this.ss.push(data);
	  if (this.finished)
	    return r;
	};

	HeaderParser.prototype.reset = function() {
	  this.finished = false;
	  this.buffer = '';
	  this.header = {};
	  this.ss.reset();
	};

	HeaderParser.prototype._finish = function() {
	  if (this.buffer)
	    this._parseHeader();
	  this.ss.matches = this.ss.maxMatches;
	  var header = this.header;
	  this.header = {};
	  this.buffer = '';
	  this.finished = true;
	  this.nread = this.npairs = 0;
	  this.maxed = false;
	  this.emit('header', header);
	};

	HeaderParser.prototype._parseHeader = function() {
	  if (this.npairs === this.maxHeaderPairs)
	    return;

	  var lines = this.buffer.split(RE_CRLF), len = lines.length, m, h,
	      modded = false;

	  for (var i = 0; i < len; ++i) {
	    if (lines[i].length === 0)
	      continue;
	    if (lines[i][0] === '\t' || lines[i][0] === ' ') {
	      // folded header content
	      // RFC2822 says to just remove the CRLF and not the whitespace following
	      // it, so we follow the RFC and include the leading whitespace ...
	      this.header[h][this.header[h].length - 1] += lines[i];
	    } else {
	      m = RE_HDR.exec(lines[i]);
	      if (m) {
	        h = m[1].toLowerCase();
	        if (m[2]) {
	          if (this.header[h] === undefined)
	            this.header[h] = [m[2]];
	          else
	            this.header[h].push(m[2]);
	        } else
	          this.header[h] = [''];
	        if (++this.npairs === this.maxHeaderPairs)
	          break;
	      } else {
	        this.buffer = lines[i];
	        modded = true;
	        break;
	      }
	    }
	  }
	  if (!modded)
	    this.buffer = '';
	};

	module.exports = HeaderParser;


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Express = __webpack_require__(10);

	var mocks = Express.Router();

	mocks.post("/enroll", function (req, res) {
	    // res.json({
	    //     "Result": "Voiceprint not detected. Please speak naturally and try again.",
	    //     "ResponseCode": "VPND"
	    // });

	    res.json({
	        "Result": "Success",
	        "EnrollmentID": "805916",
	        "DetectedVoiceprintText": "Today is a nice day to go for a walk",
	        "DetectedTextConfidence": "100.0",
	        "ResponseCode": "SUC"
	    });
	});

	mocks.post("/authenticate", function (req, res) {
	    // res.json({
	    //     "Result": "Authentication failed.",
	    //     "ResponseCode": "ATF"
	    // });

	    res.json({
	        "Result": "Authentication succeeded.",
	        "ResponseCode": "SUC"
	    });
	});

	mocks.post("/createuser", function (req, res) {
	    res.json({
	        "Result": "User already exists.",
	        "ResponseCode": "UAE"
	    });
	});

	module.exports = mocks;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var fs = __webpack_require__(24);

	function JsonFileElementalDB(filePath, schema, seed) {
	    schema = schema || {};
	    seed = seed || {};

	    var db = seed;

	    try {
	        db = JSON.parse(fs.readFileSync(filePath));
	    } catch (error) {
	        // Ignore if there isn't any previously available data
	    }

	    this.get = function (collection, callback) {
	        if (!callback && typeof collection === "function") {
	            callback = collection;
	            collection = null;
	        }

	        if (collection && db[collection]) {
	            callback(null, db[collection]);
	        } else {
	            callback(null, db);
	        }
	    };

	    this.add = function (data, callback) {
	        data = data || {};

	        doAdd(db, data, schema);

	        writeToDisk();

	        callback();
	    };

	    this.remove = function (data, callback) {
	        data = data || {};

	        doRemove(db, data, schema);

	        writeToDisk();

	        callback();
	    };

	    this.update = function (data, callback) {
	        data = data || {};

	        doUpdate(db, data, schema);

	        writeToDisk();

	        callback();
	    };

	    this.mutate = function (changes, callback) {
	        changes = changes || {};

	        if (changes.update) {
	            doUpdate(db, changes.update, schema);
	        }

	        if (changes.remove) {
	            doRemove(db, changes.remove, schema);
	        }

	        if (changes.add) {
	            doAdd(db, changes.add, schema);
	        }

	        writeToDisk();

	        callback();
	    };

	    function writeToDisk() {
	        fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
	    }
	}

	function WebtaskStorageElementalDB(storage, schema, seed) {
	    schema = schema || {};
	    seed = seed || {};

	    this.get = function (collection, callback) {
	        storage.get(function (error, db) {
	            if (error) {
	                return callback(error);
	            }

	            var promise = Promise.resolve([]);

	            if (!db) {
	                db = seed;

	                promise = new Promise(function (fulfill, reject) {
	                    storage.set(db, function (error) {
	                        if (error) {
	                            return reject(error);
	                        }

	                        fulfill();
	                    });
	                });
	            }

	            promise.then(function () {
	                if (!callback && typeof collection === "function") {
	                    callback = collection;
	                    collection = null;
	                }

	                if (collection && db[collection]) {
	                    callback(null, db[collection]);
	                } else {
	                    callback(null, db);
	                }
	            }).catch(function (error) {
	                return callback(error);
	            });
	        });
	    };

	    this.add = function (data, callback) {
	        data = data || {};

	        this.get(function (error, db) {
	            if (error) {
	                return callback(error);
	            }

	            doAdd(db, data, schema);

	            storage.set(db, callback);
	        });
	    };

	    this.remove = function (data, callback) {
	        data = data || {};

	        this.get(function (error, db) {
	            if (error) {
	                return callback(error);
	            }

	            doRemove(db, data, schema);

	            storage.set(db, callback);
	        });
	    };

	    this.update = function (data, callback) {
	        data = data || {};

	        this.get(function (error, db) {
	            if (error) {
	                return callback(error);
	            }

	            doUpdate(db, data, schema);

	            storage.set(db, callback);
	        });
	    };

	    this.mutate = function (changes, callback) {
	        changes = changes || {};

	        this.get(function (error, db) {
	            if (error) {
	                return callback(error);
	            }

	            if (changes.update) {
	                doUpdate(db, changes.update, schema);
	            }

	            if (changes.remove) {
	                doRemove(db, changes.remove, schema);
	            }

	            if (changes.add) {
	                doAdd(db, changes.add, schema);
	            }

	            storage.set(db, callback);
	        });
	    };
	}

	function doAdd(db, data, schema) {
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = Object.keys(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            var type = schema[key] && schema[key].type || "array";

	            switch (type) {
	                case "map":
	                    db[key] = db[key] || {};
	                    data[key].forEach(function (element) {
	                        return db[key][element.id] = element.value;
	                    });
	                    break;

	                case "array":
	                    db[key] = db[key] || [];
	                    data[key].forEach(function (element) {
	                        return db[key].push(element);
	                    });
	                    break;

	                case "singleton":
	                    db[key] = data[key];
	                    break;

	                default:
	                    break;
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	}

	function doRemove(db, data, schema) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = Object.keys(data)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var key = _step2.value;

	            var type = schema[key] && schema[key].type || "array";

	            switch (type) {
	                case "map":
	                    db[key] = db[key] || {};
	                    data[key].forEach(function (element) {
	                        return delete db[key][element.id];
	                    });
	                    break;

	                case "array":
	                    db[key] = db[key] || [];
	                    data[key].forEach(function (element) {
	                        var index = db[key].indexOf(element);

	                        if (index > -1) {
	                            db[key].splice(index, 1);
	                        }
	                    });
	                    break;

	                case "singleton":
	                    delete db[key];
	                    break;

	                default:
	                    break;
	            }
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }
	}

	function doUpdate(db, data, schema) {
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;

	    try {
	        for (var _iterator3 = Object.keys(data)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	            var key = _step3.value;

	            var type = schema[key] && schema[key].type || "array";

	            switch (type) {
	                case "map":
	                    db[key] = data[key];
	                    break;

	                case "array":
	                    db[key] = data[key];
	                    break;

	                case "singleton":
	                    db[key] = data[key];
	                    break;

	                default:
	                    break;
	            }
	        }
	    } catch (err) {
	        _didIteratorError3 = true;
	        _iteratorError3 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                _iterator3.return();
	            }
	        } finally {
	            if (_didIteratorError3) {
	                throw _iteratorError3;
	            }
	        }
	    }
	}

	module.exports = {
	    JsonFileElementalDB: JsonFileElementalDB,
	    WebtaskStorageElementalDB: WebtaskStorageElementalDB
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(26);
	var request = __webpack_require__(27);
	var Express = __webpack_require__(10);

	var jwt = __webpack_require__(21);
	var auth0 = process.env["NON_WEBTASK_RUNTIME"] === "1" ? __webpack_require__(28) : __webpack_require__(29);

	module.exports = function (files) {
	    var hooks = Express.Router();

	    hooks.use(function (req, res, next) {
	        if (!req.headers.authorization) {
	            return res.sendStatus(401);
	        }

	        var parts = req.headers.authorization.split(' ');

	        if (parts[0] !== 'Bearer') {
	            return res.sendStatus(401);
	        }

	        var token = parts[1];

	        try {
	            jwt.verify(token, req.webtaskContext.data.EXTENSION_SECRET, {
	                algorithms: ["HS256"],
	                audience: req.absoluteUrl,
	                issuer: 'https://' + req.webtaskContext.data.AUTH0_DOMAIN
	            });
	        } catch (error) {
	            console.log(error);
	            return res.sendStatus(401);
	        }

	        return next();
	    });

	    hooks.use(function (req, res, next) {
	        getToken(req, function (access_token, err) {
	            if (err) return next(err);

	            var management = new auth0.ManagementClient({
	                domain: req.webtaskContext.data.AUTH0_DOMAIN,
	                token: access_token
	            });

	            req.auth0 = management;

	            next();
	        });
	    });

	    var RULE_NAME = "Multi-Factor-VoiceIt-Do-Not-Rename";

	    hooks.post('/on-install', function (req, res) {
	        var sourcecode = files["mfa-redirect-rule.js"];

	        var webtaskUrl = req.absoluteBaseUrl;
	        var auth0WebtaskUrl = req.webtaskContext.data.WT_URL;

	        if (auth0WebtaskUrl) {
	            var URL_REGEX = /https:\/\/sandbox(?:-?)(eu|au)?.*\.it\.auth0\.com\/api\/run\/(.*?)\/(.*?)\/*$/;
	            var result = URL_REGEX.exec(auth0WebtaskUrl);

	            if (result) {
	                var region = result[1] ? result[1] : "us";

	                webtaskUrl = "https://" + result[2] + "." + region + ".webtask.io/" + result[3] + "/";
	            }
	        }

	        var placeholders = {
	            "${SIGNING_KEY_PLACEHOLDER}": req.config.signingKey,
	            "${ENCRYPTION_KEY_PLACEHOLDER}": req.webtaskContext.data.ENCRYPTION_KEY,
	            "${APP_URL_PLACEHOLDER}": webtaskUrl
	        };

	        _.forEach(placeholders, function (value, key) {
	            sourcecode = sourcecode.replace(key, value);
	        });

	        req.auth0.rules.getAll().then(function (rules) {
	            var rule = _.find(rules, { name: RULE_NAME });

	            if (rule) {
	                req.auth0.rules.delete({ id: rule.id }).then(function () {
	                    req.auth0.rules.create({
	                        name: RULE_NAME,
	                        script: sourcecode,
	                        enabled: true
	                    }).then(function () {
	                        res.sendStatus(204);
	                    }).catch(function (error) {
	                        console.log(error);
	                        res.sendStatus(500);
	                    });
	                }).catch(function () {
	                    res.sendStatus(500);
	                });
	            } else {
	                req.auth0.rules.create({
	                    name: RULE_NAME,
	                    script: sourcecode,
	                    enabled: true
	                }).then(function () {
	                    res.sendStatus(204);
	                }).catch(function (error) {
	                    console.log(error);
	                    res.sendStatus(500);
	                });
	            }
	        }).catch(function () {
	            console.log(error);
	            res.sendStatus(500);
	        });
	    });

	    hooks.put('/on-update', function (req, res) {
	        res.sendStatus(204);
	    });

	    hooks.delete('/on-uninstall', function (req, res) {
	        req.auth0.rules.getAll().then(function (rules) {
	            var rule = _.find(rules, { name: RULE_NAME });

	            if (rule) {
	                req.auth0.rules.delete({ id: rule.id }).then(function () {
	                    res.sendStatus(204);
	                }).catch(function () {
	                    res.sendStatus(500);
	                });
	            } else {
	                res.sendStatus(204);
	            }
	        }).catch(function () {
	            console.log(error);
	            res.sendStatus(500);
	        });
	    });

	    return hooks;
	};

	function getToken(req, cb) {
	    var tokenEndpointUrl = 'https://' + req.webtaskContext.data.AUTH0_DOMAIN + '/oauth/token';
	    var audience = 'https://' + req.webtaskContext.data.AUTH0_DOMAIN + '/api/v2/';
	    var clientId = req.webtaskContext.data.AUTH0_CLIENT_ID;
	    var clientSecret = req.webtaskContext.data.AUTH0_CLIENT_SECRET;

	    request.post(tokenEndpointUrl).send({
	        audience: audience,
	        grant_type: 'client_credentials',
	        client_id: clientId,
	        client_secret: clientSecret
	    }).type('application/json').end(function (err, res) {
	        if (err || !res.ok) {
	            cb(null, err);
	        } else {
	            cb(res.body.access_token);
	        }
	    });
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = require("auth0");

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("auth0@2.1.0");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = {
		"title": "Multi-factor Authentication with VoiceIt",
		"name": "auth0-extension-voice-factor",
		"version": "1.0.0",
		"author": "João Angelo",
		"description": "Provides multi-factor authentication with VoiceIt.",
		"type": "application",
		"codeUrl": "https://wt-joao_angelo-auth0_com-0.run.webtask.io/voice-factor-serve/bundle.js",
		"logoUrl": "https://wt-joao_angelo-auth0_com-0.run.webtask.io/voice-factor-serve/logo.svg",
		"keywords": [
			"biometrics",
			"extension"
		],
		"auth0": {
			"createClient": true,
			"scopes": "create:rules update:rules read:rules delete:rules",
			"onInstallPath": "/.extensions/on-install",
			"onUninstallPath": "/.extensions/on-uninstall"
		},
		"secrets": {
			"VIT_DEVELOPER_ID": {
				"description": "Your VoiceIt Developer ID",
				"required": true,
				"type": "password"
			},
			"ENCRYPTION_KEY": {
				"description": "Base64 encoded encryption key (AES 128) used for encryption of VoiceIt user secrets.",
				"required": true,
				"type": "password"
			}
		}
	};

/***/ }
/******/ ]);