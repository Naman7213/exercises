const express = require("express");

const app = express();

const routes = require("./router/routes");

app.use("/exercises", routes);

module.exports = app;
