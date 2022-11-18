const express = require("express");

const app = express();

const routes = require("./router/routes");

app.use("/exercises", routes);

app.use("/", (req, res) => {
  res.status(200).json({ message: "It Works!" });
});

module.exports = app;
