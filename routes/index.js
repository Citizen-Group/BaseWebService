/**
 *  INDEX
 *  This file handles all the routing code.
 */
"use strict";

const fs = require('fs');
const mongoose = require('mongoose');

var express = require("express");
var router = express.Router();

router.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

router.get("/", async function (req, res, next) {

  var sitedata = {
    currentStatus:{
      overallStatus: "success",
      lastFailureClockTime: Date.now()
    },
    "events": [{
      "timestamp:": Date.now(),
      "subtext": "Donkeys for you and meeee!",
      "location": "TP to BLA",
      "reason": {
        "short": "Donkeys on the track",
        "long": "Zomg donkeys all over the tracks"
      }
    }]
  }

  res.render("index", sitedata);
})

module.exports = router;