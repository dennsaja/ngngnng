// Import packages
const express = require("express");
const index = require("./routes/index");
const notfound = require("./routes/404");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", index);
app.use("/error/dennsaja/function/", notfound);
// 404 handler
app.use((req, res, next) => {
    res.redirect("/error/dennsaja/function/");
  });

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
