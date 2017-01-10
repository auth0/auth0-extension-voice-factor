"use strict";

const Express = require("express");

var mocks = Express.Router();

mocks.post("/enroll", (req, res) => {
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

mocks.post("/authenticate", (req, res) => {
    // res.json({
    //     "Result": "Authentication failed.",
    //     "ResponseCode": "ATF"
    // });

    res.json({
        "Result": "Authentication succeeded.",
        "ResponseCode": "SUC"
    });
});

mocks.post("/createuser", (req, res) => {
    res.json({
        "Result": "User already exists.",
        "ResponseCode": "UAE"
    });
});

module.exports = mocks;
