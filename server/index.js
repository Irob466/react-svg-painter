const express = require("express");
const app = express();
const Bundler = require("parcel-bundler");
const { file, options } = require("../parcel.config");
const bundler = new Bundler(file, options);
const path = require("path");
const morgan = require("morgan");

// logging middleware
app.use(morgan("dev"));

// static middleware
app.use(express.static(path.join(__dirname, "../dist")));

// body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// parcel bundler
app.use(bundler.middleware());

// routes
app.use("/api", require("./api"));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../dist/index.html"));
// });

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
