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

    req.webtaskContext.data.AUTH0_DOMAIN = config.Auth0Domain;
    req.webtaskContext.data.AUTH0_CLIENT_ID = config.Auth0ClientId;
    req.webtaskContext.data.AUTH0_CLIENT_SECRET = config.Auth0ClientSecret;
    req.webtaskContext.data.EXTENSION_SECRET = config.ExtensionSecret;

    req.webtaskContext.data.VIT_DEVELOPER_ID = config.VoiceItDeveloperId;
    req.webtaskContext.data.ENCRYPTION_KEY = config.EncryptionKey;
    req.webtaskContext.data.TWILIO_ACCOUNT_SID = config.TwilioAccountSid;
    req.webtaskContext.data.TWILIO_AUTH_TOKEN = config.TwilioAuthToken;
    req.webtaskContext.data.TWILIO_PHONE_NUMBER = config.TwilioPhoneNumber;

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