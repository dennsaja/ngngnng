const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get("/hujan-hujan-setelah-sas", async (req, res, next) => { 
  res.sendFile(path.join(__dirname, '..', 'views', 'hujan-hujan-setelah-sas.html'));
});
router.get("/kemangan-drama-fashion", async (req, res, next) => { 
  res.sendFile(path.join(__dirname, '..', 'views', 'kemangan-drama-fashion.html'));
});



module.exports = router;
