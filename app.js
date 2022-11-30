const express = require("express");

const app = express();

const routes = require("./router/routes");

app.use("/", (req, res) => {
  res.status(200).json({ message: "It Works!" });
});
app.use("/exercises", routes);

module.exports = app;
