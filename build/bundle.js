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
		"index.html": "H4sIAAAAAAAAC91ZbW/bNhD+PmD/gdE+ZAMiKX5pVwS2gCw1WgNtkiXOgAIDBlo8W0woUSUpO1mQ/74jJTuyrRROk67Z/MHmy/Hu+NzD08ns7bw9ORp9Oh2QxKQi+vGHXvVrW0AZtgh+eikYSuKEKg2m7xVm4r/xSLiYNdwIiGaSx+BPaGyk6oXlWCUgeHZFFIi+p82NAJ0AGI8kCiZ9LzEm1wdhGLMsoIVJ9oNYpqGTmxacQdgN3gTtVyHPGFwHKc+CWOvSeF17qSwoF+pSZsOiucmh7xm4NuFSSS+sNorNsWQ3C581xIbLjMSCat33Lot0LI2SmVcJOKGkHfV4OiVaxda4kFMZ6NnUaka97RXR1hpCOFCbzqOPhTC8miWHiARkhsfUOTHnJiF/2OVDE/TCfOFkWHl5D8ZEqpRQN2g9iiUqyQrwCIYwkazv5VIjEhlNEYn7Wc5qvbpfPMsLUwGXcMYgq4S1mvxl5JXtV8pqIzMqChy6vb0ldpjc3d3V+BJaJ5cuWyEDaS6oAV8bqgzxTC58yJQUIkUUPLu+Wsv4bBES66+dXQvIYLluPQS1tVQA2nHf/lTIMRVVZ05VxjOM4Mznk0rOi3rahn4anUsLI86TMWXkstCGJDTPIQO2g8EohcifuKPSwN1dL0Srq4F+z3HPpNCghgwl9gg3ZE41YWAwmsCISaghN7IgTGa7ZhdNzIDQzIUVW45GhK4y5B6tgHySxa4QJAOrS1ZT9y7YD0agWc8YcApIxQXcaY1ulf+jBGrmSK5kDFrjaftccAXaeY5mFeSA+7B+r5rIE0U1oAuFIoaneFpLE/UwdqK1E3DqFmFEO2sRjVY31ssVRGeQQjoGZd1AZBPrkkIYM6YXG0TXcHNoWEFdYRWt2gjNeIrMZL6CWCqGi/xxYQy6NPPHmJQOGNd0LADPxFLCskdmB47MNgNRx6HwQVUPkHRsMB4m8xlMKCaHSmsseHyF7KdZDMKLjg6PjwYfGmh2ODGIAO5Pa0tYRJOUp2tpnVQbQVxcjKTify9Ex0rOdYkgMrUEMOWxknkiMyA/8wlB4qMrdu+/7FmB3XWSOd66MGOakhb8khZKsgKZZ82UXNgkAC0Yt7J4BDEx3IDyHCWRdNXBty1vPfYabaHiKjAuKeP+ZxzmZ4s9XyhhQ1FKrkTemVz1Io9OssrRlW2AoHkJCsEwkNKEE6thW/JMF+OUG9NwkBoCnSskiLrxNqm107SPFT6Uhrzo/OK3j8NRA5Hx5JwqObV8aDhGLqkvvcdnY+Ua0mAD5pUcLPxr7b8mtpEyv7MuXEZT4TkWsFxEFfOZjHX1KLHdVtNCt5hvLPM5hmEJUjV7S3btMJ4o5n67v7aIVDSbwu5BLV1p0iOtvQ3ZfYLAQLYmGvVJi9xZvvCHvEvam+652seLlrEiP7XWHkU11pXQrEMcNmS2bwF7+1+Evf0I2NvPAnv7pcLeuPAbwd55BOydZ4G981Jh7/6LsHcfAXv3WWDvPhH2er/eXinQIWO1anzH94nvN8nVCvk5jP3VEvBxBf1qJfgyi/onFZ3/vRLzOenhCsonEeTUlaT/e5p8uWCsVYIlGc4Gv18Mzkfk6PDD5uvBM71lfKGmlGJhIK8kfKNofLVRTQq+mWTvl0gmMV8u+oE2kGNy3d+rycSFUhj4DbF+v78qiK/TsCGF6Xffpt+GvBmjVlAPJeUahC6/zxXNvajxYbZco3OabcIC1/fhGrxFLqFUYx5vdKgXivUHx1dh2toW09Y2mLZeAqbD4+FoePgdMW1vi2l7G0zbLwNTcnp28u5scH7+vVDtbItqZxtUOy8B1bPB0cnZ2+Hxu++FaXdbTLvbYNp9CZgeXozeD45Hw6PD0dOB7YVSbF381CoX++6BVYKtzer/yPR0rHhuyouD2hXIpQ5iIQs2EVSBuwmhl/QaXRnr0Mzx5SG41GHrddAJXoUj17c3Ipfa/aflVEZfb2BWQNgOWsEb23qcYskguPxcgLpxOsum3w7aQfdRilJ6bS+CxlIarKhobjtW4XIg7KDO/RBRWA49FoIAX0iUiX24zgHrJ/uXuTXxERin50YBTcuXKlDrWhv0BtWsXpfthdVtkrtiWtyq/QNsGdgncRsAAA==",
		"scripts.js": "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",
		"styles.css": "H4sIAAAAAAAAC7VVzY7bIBC+R8o7jLTqEct2k27rHCvlPbDBDg0GBLhJWvXdOwH/JM066z3UN2CY72dmcPKja0vtrVZwyOE3lLQ6NlZ3ipFKS20L8JYqZ6jlyu/gz3q1XiWVVh6XGG4oY0I1BaSQ83Y497QkY8x6Bfi11DZCYVyy5S2ku/UqhBrLh4hH5BeWspx93sXzCeqaYkhAOyY0EokxTDgj6aWAUurquLuHzm6BtUyM1Y3lzhFUWB0jjTEBSpA8JJDCeeL8RXLiL4YXoLSKJ6OmsBr5oRFXrLAZ0hDMqDtfQC3OnIX9k2D+gJTS9FNk9MhHircokYpL2fNSnBy4aA6YOU82PaLRTnihkZblknrxM3L1/OwJlaLBgwrrwu0T3ERg9cjJUhMplNoybomlTHSugG0gjTm1KYBkfTkAhrLVdb27Yz5VY+I7XBpNBNp5DSTv9yWv/WCtjZfSfwTS0mnZeX7raD41xxNpzlPfN97IaGvOd6UZ1qMKoYLlk5haSIludvY6G9+v4p8BT1tYiog9V6urr1ka8GfSTTsMu/GuSuH2qzkDmiMYvGRf8mwTuy6Mco/YR4eaQeaAU8eJUAQbNcSSEy+PwpMP3Wn1rw9cWKRtWvVGP3bn48NR19/o9nWxfQsyplm5+RrbOorCMXjD43fxvGb6ablu3rweu5Q0NNyy3Au07Pf7OSE36DNDjz8Lr1vsz/8z9jMjsWy65614GPuRZP+ah5/CevUXn1b/ew8HAAA=",
		"logo.svg": "H4sIAAAAAAAAC31U246bMBB9br8CsS+tZIyxudjkstpuW7VSVupT1LcoS0hASyECNpeu+u89NiQbtlGDFI5mPHPOXMz49vCrsHZp3eRVObE9ymzrdjpudhsrX03s2fKY1gvPtpr2WKQTOy2Xj0XqPC6Tp01dPZeruEz3FsPjiYgK/CsqRvZlQgTv8nT/qTpM7DcHbQvkcbNdJki9rdMmrXepMZbNxM7adhu77n6/p3tBq3rjcsaYC2n9kfhQ5OXTtYOeUso1Xhu1aOlWe9yCpE0PrZs0jT19/442LXtZ50UR3/B7eXd3N/pjjN5LBUV5e4wZ9dQoKfKts122WfxcFx9ufj7Mvn9eRGrxcdTFsohJJvtY3if8an69UZxYeMTlFxjHrtE0HSd5nUBbUiwbFAw9tpWgTaGkHOgIpGhom0l0vNxnC9uq4QhxxJ2ONxfOIFig3FW6bl4zd9n869mCcJjM7WNR8Q8UfHES9SL1c5OeFqHChNdFtY93eZNjJTBz0+84q9P1xL55JdB5Txmn421VHDdV+VqydykIWwFF2yovWzgjRiURjAbYlpB6RHpUAgoaEk8EwFJSRbRBWQF8xGOBhSBOFJbLsgz1Bpy6ljMhOgu+h5CRwKc849jQOZYxShhhDqO+oyh3PEaFBo1GEelNBsz6yN+DuUhmKr1KFQgakADLdH9G5AoqGOE+DbUOoovwhP4LwaqRZSUGM2Nyzk6D5jq+C+yezBFDw473BkdzeihaB4YGJU4Iu66R01DXqZzAEDoeugCr45s32P4h+qblD1sRRf9phaI+CULdd079HQoQ53oxMwdyDEg0UlClDc7Jo8FcR78h9A1hnSbtgDBL803W4hvk0WAQEOKiWPt81WYTW9AIq2tuCe4GLomMustwXX+/ZpmQGKdUev9YQCJOpCIn51BdfweG6USXLgoxgiCiMsN05hHvB6QIsjsQhLexER+D5rp12E85O4e9YRLdbcMXcvoXoy5XZ9gFAAA=",
		"mfa-redirect-rule.js": "H4sIAAAAAAAAC6VXbW/bNhD+PmD/gVWDQkYdpSm2rPNgtGlmNFkzx4jrAcUwuLR8spnIpEZSTjzX/31H6t2SYxfVB0OW7o7He547PQxi7msmOFkK5kNAfS2kGyuQbeILruFR4w0Nwwn171tk/eMPBK8llcSXq0gL0iUS/o2ZBNdJnjit3wqjuwddtrhTgj/ARIt74O9+8U69X611KajgAZuhS7qQuRSbccZnH2HVIc7Renj1oX/V/zD+2Ps8HlyfX/Qub65/791unHbhAtzmgtvKvHr9i9vPg09XN/2nHR81cIV+Ixlav/PBYDy6vd7p4FM+UjCYCw7nsZ4D18ynZuEO+WN40/ciKhVu/Gh9cd4fj4a98eDypt8bn48+XVZjtpKYm7wcQQZMuhl3SjVtlQtjCnYPK6wWhwfyPg4CkG5SQa9SgTZxJlTB2U85Npk7W6J3gpsnKZ+KxfuVBuWenhW45NiwaA6ysPclUA0X9ilbug4FdXz6+s2xP/GdtkmsjeHrYdLMYGoiWWcvjnBvYDeIqcY6eOM0p1z4vsydA8Zp6JatC3sJOpacfDlas6WnxVBLJFJhu+kcrfOQmy/pQpsswskJGWoqNZmsiD8H/x6dCQvIAxAqgcyxXqF5RHGdKfLb13mnJAHQ1k2byIuk0MIXIel2u8TJHI4zB6eCrHF8ZprQW4Cmpi7ekukxcCnCcIEkq1inud6CD2yZJJSFJYGQ+NeEInpONf4AkXEIZMqmhAttexOULragBMGGExKqC6SlzAK7PA7DNqkMijJSm23Ybc8byNN6pOt6+CtXnn27xU2lkRQ7PezbCtharrarYsJEdBUKatiGw8hbIleDlWvXa6fjxismTHs7grloOBOS6flCdcjfzuXw9c9nzj9Vs02VdxmG6dqeiifkGeJuITU/YzatQdhYZWzsEac4WTCD/2DakxLHszMyeC6YWlDtzz2nVa58rfo5obJsDJVoMazg+1PJyOSLRRQCokYrs/DQDLMEueA+2IJZlL8nvSEoM84J9mpKwW8u21N96GU7bq7hYa5ITS1jqDHIXGZDryxlVDomz6PozzSiW+ZTu7payzMIuPlXxG1M0FyHtnRepZbnmwKWYoOU+8Mbo8Zw2ygQCBUchPn+hDelkURs2jZbUc8XAygRgheKWWpRA+TQluDwGOEoRWQDysJYwhbX0qTqG7XzSgqkqBl8g+QOBx8mtgT3tJoRjvweVxg9Ge9zqshfRsNdmWEemr4mGRkKJ8sRGkXj7BXpNjz7+pWsN5XFik4oG+77Ku1zqAq9fK1ppzIpyUvivENHj/ElDdm0rL+ySwHKEd3JxVKDpjlrlSTAHB4Rk4ZAIeWzmM4A1R/w49GwabG8czsIMEK4RbkabwpIv7mdy8Xb+X1FJlwg/RmPcfIGGslwz8WDUQL2m5/DaigyAZyBCnThnWa3d15Ychqh248XEysEbYb20Zgnz5A4xSZy0MsmteJY5ZJqD6NOEq0i7H0ux+uZ+CFlC9VMIPzcVhnUgCGnC0iNzG2DRTnrTnnnDbZ3mnV26Oht0jV4m6bISf9Eu3iNOzE2Gf33RkgMd0Qx3D8gRtYiO6IklnDIfvJG2tdBZQVpZJxRbG5CgWYVh9SJkFPqCg9iZ6+a9JkJmYlePO0lQtMenUpnwIZPQOGBZxDnrc2q6+CMyjRsXUIcXocdUqeyZrkHX7zIst55ECVvifP8xDqdVGWZQzrmFR7It198wxe5Wo7nJ8WualG2S1MI+7T9sZlJbA7e5bB1Mhx8BjlMqOwSKLkwwcQ3/wMSK+AUJxEAAA=="
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var url = __webpack_require__(5);
	var crypto = __webpack_require__(6);

	var _ = __webpack_require__(7);
	var Handlebars = __webpack_require__(8);
	var request = __webpack_require__(9);
	var base64url = __webpack_require__(10);
	var Express = __webpack_require__(11);
	var bodyParser = __webpack_require__(12);
	var cookieParser = __webpack_require__(13);
	var Dicer = __webpack_require__(14);
	var twilio = __webpack_require__(22);

	var jwt = __webpack_require__(23);

	var mocks = __webpack_require__(24);
	var elemental = __webpack_require__(25);
	var hooks = __webpack_require__(27);
	var metadata = __webpack_require__(30);

	Handlebars.registerHelper("template-start", function (id) {
	  return new Handlebars.SafeString("<script type=\"text/x-template\" id=\"" + id + "\">");
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

	var checks = {
	  session: function session(req, res, next) {
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
	        req.db.add({ sessions: [{ id: sid, value: session }], tokens: [payload.jti] }, function (error) {
	          if (error) {
	            return next(error);
	          }

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
	  csrf: function csrf(req, res, next) {
	    var csrf = req.get("X-CSRF-Token") || req.body.csrf_token;

	    if (csrf !== req.session.csrf) {
	      res.sendStatus(403);
	    } else {
	      next();
	    }
	  }
	};

	module.exports = function (files) {
	  var app = new Express();

	  app.use(cookieParser());
	  app.use(bodyParser.urlencoded({ extended: true }));

	  app.get("/debug", function (req, res) {
	    return res.json({});
	  });

	  app.get("/ping", function (req, res) {
	    return res.send("PONG");
	  });

	  app.post("/decrypt", function (req, res) {
	    var plaintext, ciphertext, key;

	    key = req.body.key;
	    ciphertext = req.body.ciphertext;
	    plaintext = decrypt(ciphertext, key);

	    res.json({ plaintext: plaintext });
	  });

	  app.get("/meta", function (req, res) {
	    res.status(200).send(metadata);
	  });

	  app.use("/", function (req, res, next) {
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

	    req.absoluteUrl = [xfproto ? xfproto.split(',')[0].trim() : 'https', '://', req.get('Host'),
	    //xfport ? ':' + xfport.split(',')[0].trim() : '',
	    url.parse(req.originalUrl).pathname].join('');

	    req.absoluteBaseUrl = [xfproto ? xfproto.split(',')[0].trim() : 'https', '://', req.get('Host'),
	    //xfport ? ':' + xfport.split(',')[0].trim() : '',
	    req.basePath].join('');

	    // Make the global configuration available at the request level
	    req.db.get(function (error, data) {
	      if (error) {
	        return next(error);
	      }

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
	  app.get("/", checks.session, function (req, res) {
	    if (!req.originalUrl.endsWith("/")) {
	      res.redirect(req.originalUrl + "/");

	      return;
	    }

	    res.send(Handlebars.compile(files["index.html"])({ csrf: req.session.csrf }));
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
	  app.post("/continue", checks.session, checks.csrf, function (req, res, next) {
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
	      data.calls = [{ id: req.session.cid }];
	    }

	    if (req.session.pcid) {
	      data.calls_progress = [{ id: req.session.pcid }];
	    }

	    req.db.remove(data, function (error) {
	      if (error) {
	        return next(error);
	      }

	      // Redirect to Auth0 with JWT and state
	      res.redirect("https://" + domain + "/continue?state=" + state + "&token=" + token);
	    });
	  });

	  // Create an helper regular expression to process multipart requests
	  var RE_BOUNDARY = /^multipart\/.+?(?:; boundary=(?:(?:"(.+)")|(?:([^\s]+))))$/i;

	  // Process an enrollment request
	  app.post("/api/web/enroll", checks.session, checks.csrf, function (req, res, next) {
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
	        uri: req.absoluteBaseUrl + "/vitmocks/enroll",
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
	            uri: req.absoluteBaseUrl + "/vitmocks/createuser",
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
	  app.post("/api/web/authenticate", checks.session, checks.csrf, function (req, res, next) {
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
	          uri: req.absoluteBaseUrl + "/vitmocks/authenticate",
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

	  app.get("/api/phone/call-progress/:cpid", checks.session, checks.csrf, function (req, res, next) {
	    req.db.get(function (error, data) {
	      if (error) {
	        return next(error);
	      }

	      var cpid = req.params.cpid;

	      var cid = data.calls_progress[cpid];

	      if (!cid) {
	        res.sendStatus(400);

	        return;
	      }

	      res.json({ step: data.calls[cid].step });
	    });
	  });

	  app.post("/api/phone/start-call", checks.session, checks.csrf, function (req, res, next) {
	    var cid = base64url.escape(crypto.randomBytes(32).toString("base64"));
	    var cpid = base64url.escape(crypto.randomBytes(16).toString("base64"));

	    var data = {
	      calls: [{ id: cid, value: { sid: req.session.id, step: 0 } }],
	      calls_progress: [{ id: cpid, value: cid }]
	    };

	    req.db.add(data, function (error) {
	      if (error) {
	        return next(error);
	      }

	      var accountSid = req.webtaskContext.data.TWILIO_ACCOUNT_SID;
	      var authToken = req.webtaskContext.data.TWILIO_AUTH_TOKEN;

	      var client = twilio(accountSid, authToken);

	      client.calls.create({
	        url: req.absoluteBaseUrl + "/api/phone/receive-call/" + cid,
	        to: req.session.phoneNumber,
	        from: req.webtaskContext.data.TWILIO_PHONE_NUMBER
	      }, function (error, call) {
	        if (error) {
	          return next(error);
	        }

	        req.db.add({ calls: [{ id: cid, value: { sid: req.session.id, step: 1 } }] }, function (error) {
	          if (error) {
	            return next(error);
	          }

	          res.json({ cpid: cpid });
	        });
	      });
	    });
	  });

	  app.post("/api/phone/receive-call/:cid", function (req, res, next) {
	    req.db.get(function (error, data) {
	      if (error) {
	        return next(error);
	      }

	      var cid = req.params.cid;

	      var call = data.calls[cid];

	      if (!call) {
	        // If the cid does not match an expected call fail the request
	        res.sendStatus(403);

	        return;
	      }

	      var twiml = new twilio.TwimlResponse();

	      twiml.say("You have initiated a Voice Authentication process.");
	      twiml.redirect(req.absoluteBaseUrl + "/api/phone/authentication/record");

	      // Set Twilio session cookie
	      res.cookie("tw_cid", cid, { httpOnly: true, secure: true });

	      req.db.add({ calls: [{ id: cid, value: { sid: call.sid, step: 2 } }] }, function (error) {
	        if (error) {
	          return next(error);
	        }

	        res.send(twiml.toString());
	      });
	    });
	  });

	  app.post("/api/phone/authentication/record", function (req, res, next) {
	    req.db.get(function (error, data) {
	      if (error) {
	        return next(error);
	      }

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
	        action: req.absoluteBaseUrl + "/api/phone/authentication/verify",
	        maxLength: "5",
	        trim: "do-not-trim"
	      });

	      req.db.add({ calls: [{ id: cid, value: { sid: call.sid, step: 3 } }] }, function (error) {
	        if (error) {
	          return next(error);
	        }

	        res.send(twiml.toString());
	      });
	    });
	  });

	  app.post("/api/phone/authentication/verify", function (req, res, next) {
	    req.db.get(function (error, data) {
	      if (error) {
	        return next(error);
	      }

	      var cid = req.cookies.tw_cid;

	      var call = data.calls[cid];

	      if (!call) {
	        // If the session call identifier does not match an expected call fail the request
	        res.sendStatus(403);

	        return;
	      }

	      var pcid = _.findKey(data.calls_progress, _.matches(cid));

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
	        uri: req.absoluteBaseUrl + "/vitmocks/authenticate",
	        method: "POST"
	      };

	      req.db.add({ calls: [{ id: cid, value: { sid: call.sid, step: 4 } }] }, function (error) {
	        if (error) {
	          return next(error);
	        }

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
	                twiml.redirect(req.absoluteBaseUrl + "/api/phone/authentication/record");
	                break;

	              default:
	                progress++;

	                // Tag the session with the call and call progress identifiers so that that they get cleaned up
	                req.session.cid = cid;
	                req.session.pcid = pcid;

	                // Flag that authentication was completed for this session
	                req.session.vit.authenticated = true;

	                data.sessions = [{ id: call.sid, value: req.session }];

	                twiml.say(authenticationResponse.Result);
	                break;
	            }
	          } else {
	            progress--;

	            twiml.say("API Error. Your authentication did not pass. Please try again.");
	            twiml.redirect(req.absoluteBaseUrl + "/api/phone/authentication/record");

	            console.log(new Error(response.statusCode, body));
	          }

	          data.calls = [{ id: cid, value: { sid: call.sid, step: 4 + progress } }];

	          req.db.add(data, function (error) {
	            if (error) {
	              return next(error);
	            }

	            res.send(twiml.toString());
	          });
	        });
	      });
	    });
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

	module.exports = require("lodash");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("handlebars");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("request");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("base64-url");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("cookie-parser");

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var WritableStream = __webpack_require__(15).Writable
	                     || __webpack_require__(16).Writable,
	    inherits = __webpack_require__(17).inherits;

	var StreamSearch = __webpack_require__(18);

	var PartStream = __webpack_require__(20),
	    HeaderParser = __webpack_require__(21);

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
/* 15 */
/***/ function(module, exports) {

	module.exports = require("stream");

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = require("readable-stream");

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
	  by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
	*/
	var EventEmitter = __webpack_require__(19).EventEmitter,
	    inherits = __webpack_require__(17).inherits;

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
/* 19 */
/***/ function(module, exports) {

	module.exports = require("events");

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(17).inherits,
	    ReadableStream = __webpack_require__(15).Readable || __webpack_require__(16);

	function PartStream(opts) {
	  ReadableStream.call(this, opts);
	}
	inherits(PartStream, ReadableStream);

	PartStream.prototype._read = function(n) {};

	module.exports = PartStream;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var EventEmitter = __webpack_require__(19).EventEmitter,
	    inherits = __webpack_require__(17).inherits;

	var StreamSearch = __webpack_require__(18);

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
/* 22 */
/***/ function(module, exports) {

	module.exports = require("twilio");

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("jsonwebtoken");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var Express = __webpack_require__(11);

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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var fs = __webpack_require__(26);

	function JsonFileElementalDB(filePath, schema, seed) {
	    schema = schema || {};
	    seed = seed || {};

	    var db = seed;

	    try {
	        db = readFromDisk();

	        Object.keys(seed).forEach(function (key) {
	            return db[key] = db[key] || seed[key];
	        });
	    } finally {
	        writeToDisk(db);
	    }

	    this.get = function (collection, callback) {
	        var db = readFromDisk();

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

	        var db = readFromDisk();

	        doAdd(db, data, schema);

	        writeToDisk(db);

	        callback();
	    };

	    this.remove = function (data, callback) {
	        data = data || {};

	        var db = readFromDisk();

	        doRemove(db, data, schema);

	        writeToDisk(db);

	        callback();
	    };

	    this.update = function (data, callback) {
	        data = data || {};

	        var db = readFromDisk();

	        doUpdate(db, data, schema);

	        writeToDisk(db);

	        callback();
	    };

	    this.mutate = function (changes, callback) {
	        changes = changes || {};

	        var db = readFromDisk();

	        if (changes.update) {
	            doUpdate(db, changes.update, schema);
	        }

	        if (changes.remove) {
	            doRemove(db, changes.remove, schema);
	        }

	        if (changes.add) {
	            doAdd(db, changes.add, schema);
	        }

	        writeToDisk(db);

	        callback();
	    };

	    function readFromDisk() {
	        return JSON.parse(fs.readFileSync(filePath));
	    }

	    function writeToDisk(db) {
	        fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
	    }
	}

	function WebtaskStorageElementalDB(storage, schema, seed) {
	    schema = schema || {};
	    seed = seed || {};

	    var upgraded = false;

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
	            } else if (!upgraded) {
	                Object.keys(seed).forEach(function (key) {
	                    return db[key] = db[key] || seed[key];
	                });

	                upgraded = true;
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
/* 26 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _ = __webpack_require__(7);
	var request = __webpack_require__(9);
	var Express = __webpack_require__(11);

	var jwt = __webpack_require__(23);
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
	            if (err) {
	                console.log("Failed to obtain access token: " + error);

	                return next(err);
	            }

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

	        var canUsePhoneAuthentication = true;
	        canUsePhoneAuthentication = canUsePhoneAuthentication && !!req.webtaskContext.data.TWILIO_ACCOUNT_SID;
	        canUsePhoneAuthentication = canUsePhoneAuthentication && !!req.webtaskContext.data.TWILIO_AUTH_TOKEN;
	        canUsePhoneAuthentication = canUsePhoneAuthentication && !!req.webtaskContext.data.TWILIO_PHONE_NUMBER;

	        var placeholders = {
	            "${SIGNING_KEY_PLACEHOLDER}": req.config.signingKey,
	            "${ENCRYPTION_KEY_PLACEHOLDER}": req.webtaskContext.data.ENCRYPTION_KEY,
	            "${APP_URL_PLACEHOLDER}": webtaskUrl,
	            "${CAN_USE_PHONE_AUTH_PLACEHOLDER}": canUsePhoneAuthentication
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
	        }).catch(function (error) {
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
	                }).catch(function (error) {
	                    console.log("Failed to delete rule: " + error);
	                    res.sendStatus(500);
	                });
	            } else {
	                res.sendStatus(204);
	            }
	        }).catch(function (error) {
	            console.log("Failed to list rules: " + error);
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

	    request({
	        uri: tokenEndpointUrl,
	        json: {
	            audience: audience,
	            grant_type: 'client_credentials',
	            client_id: clientId,
	            client_secret: clientSecret
	        },
	        method: 'POST'
	    }, function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            cb(body.access_token);
	        } else {
	            cb(null, error);
	        }
	    });
	}

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
			},
			"TWILIO_ACCOUNT_SID": {
				"description": "The Twilio account identifier.",
				"type": "password"
			},
			"TWILIO_AUTH_TOKEN": {
				"description": "The Twilio authentication token.",
				"type": "password"
			},
			"TWILIO_PHONE_NUMBER": {
				"description": "The Twilio number to user for making outgoing calls.",
				"type": "text"
			}
		}
	};

/***/ }
/******/ ]);