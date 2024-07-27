// Import packages
const express = require("express");
const home = require("./routes/home");
const notfound = require("./routes/404");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", home);
app.use("/", notfound);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
