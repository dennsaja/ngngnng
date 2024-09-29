const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'apps.html'));
});

router.get("/swift-app", async (req, res, next) => { 
  res.redirect("https://drive.google.com/file/d/1T1ysjW__yar0nOYrtK9nt58oOXEpWrn7/view?usp=drive_link");
});

router.get("/leviosa-app", async (req, res, next) => {
  res.redirect("https://drive.google.com/file/d/1dwc0RZrRVsdxrq5gbfjaBpmg-h4KYYRX/view?usp=drive_link");
});

router.get("/leviosa", (req, res) => {
  res.redirect("https://drive.google.com/file/d/1dwc0RZrRVsdxrq5gbfjaBpmg-h4KYYRX/view?usp=drive_link"); // Ganti dengan URL yang sesuai
});



module.exports = router;