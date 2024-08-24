// Import packages
const express = require("express");
const index = require("./routes/index");
const home = require("./routes/home");
const notfound = require("./routes/404");
const verif = require("./routes/verified");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", index);
app.use("/home", home);
app.use("/verified", verif);
app.use("/home/notfound", notfound);
// 404 handler
app.use((req, res, next) => {
    res.redirect("/home/notfound");
  });

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
