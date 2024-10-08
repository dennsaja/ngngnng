const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});
router.get("/ping", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
});

module.exports = router;
