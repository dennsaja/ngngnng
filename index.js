// Import packages
const express = require("express");
const path = require('path');
const index = require("./routes/index");
const notfound = require("./routes/404");
const contact = require("./routes/contact");
const about = require("./routes/about");
const blog = require("./routes/blog");
const grid = require("./routes/grid");
const kisahkartini = require("./routes/kisah-kartini-main");
const hariayah = require("./routes/hari-ayah-25");

// Middlewares
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
// app.use("/", index);
app.use("/contact", contact);
app.use("/about", about);
app.use("/blog", blog);
app.use("/grid", grid);
app.use("/film-kisah-kartini", kisahkartini);
app.use("/selamat-hari-ayah", hariayah);
app.use("/", hariayah);
app.use("/waduh-erorr-banh", notfound);
// 404 handler
app.use((req, res, next) => {
    res.redirect("/waduh-erorr-banh");
  });

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
