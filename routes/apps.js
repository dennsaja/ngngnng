const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'apps.html'));
});

router.get("/apps/swift-app", async (req, res, next) => { 
  res.sendFile(path.join(__dirname, 'apk', 'swift-app.apk'));
});

router.get("/apps/leviosa-app", async (req, res, next) => {
  res.sendFile(path.join(__dirname, 'apk', 'leviosa-app.apk'));
});
module.exports = router;
