const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/404", async (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

module.exports = router;