// Import packages
const express = require("express");
const path = require('path');
const index = require("./routes/index");
const notfound = require("./routes/404");
const apps = require("./routes/apps");

// Middlewares
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/", index);
app.use("/apps", apps);
app.use("/error/dennsaja/function/", notfound);
// 404 handler
app.use((req, res, next) => {
    res.redirect("/error/dennsaja/function/");
  });

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
