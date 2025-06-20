const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  // Menggunakan path untuk pergi ke folder views yang berada di luar folder routes
  res.sendFile(path.join(__dirname, '..', 'views', 'hari-ayah-25.html'));
});

module.exports = router;
