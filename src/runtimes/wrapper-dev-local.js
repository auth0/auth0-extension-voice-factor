"use strict";

process.env["NON_WEBTASK_RUNTIME"] = "1";
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const fs = require("fs");
const https = require("https");

const Express = require("express");

const builder = require("./../server/app-builder.js");
const config = require("./dev-local-config.json");

var app = new Express();

app.use('/', (req, res, next) => {
    req.webtaskContext = req.webtaskContext || {};
    req.webtaskContext.data = req.webtaskContext.data || {};

    Object.assign(req.webtaskContext.data, config);

    next();
})

app.use('/vf/', builder({
    "index.html": fs.readFileSync('./src/client/index.html', 'utf-8'),
    "scripts.js": fs.readFileSync('./src/client/scripts.js', 'utf-8'),
    "styles.css": fs.readFileSync('./src/client/styles.css', 'utf-8'),
    "logo.svg": fs.readFileSync('./src/client/logo.svg', 'utf-8'),
    "mfa-redirect-rule.js": fs.readFileSync('./src/server/mfa-redirect-rule.js', 'utf-8')
}));

var options = {
  key: fs.readFileSync('./src/runtimes/dev-local-key.pem'),
  cert: fs.readFileSync('./src/runtimes/dev-local-cert.pem')
};

const port = 7100;

var server = https.createServer(options, app).listen(port, function () {
    console.log(`Server started at: https://voicefactor.localtest.me:${port}/vf/`);
});