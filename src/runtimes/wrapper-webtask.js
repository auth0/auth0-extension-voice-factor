"use strict";

const zlib = require("zlib");

const Webtask = require("webtask-tools");

const files = require("./../files.json");
const builder = require("./../server/app-builder.js");

const app = builder({
    "index.html": zlib.unzipSync(new Buffer(files["index.html"], "base64"), 'utf-8').toString('utf8'),
    "scripts.js": zlib.unzipSync(new Buffer(files["scripts.js"], "base64"), 'utf-8').toString('utf8'),
    "styles.css": zlib.unzipSync(new Buffer(files["styles.css"], "base64"), 'utf-8').toString('utf8'),
    "logo.svg": zlib.unzipSync(new Buffer(files["logo.svg"], "base64"), 'utf-8').toString('utf8'),
    "mfa-redirect-rule.js": zlib.unzipSync(new Buffer(files["mfa-redirect-rule.js"], "base64"), 'utf-8').toString('utf8')
});

module.exports = Webtask.fromExpress(app);