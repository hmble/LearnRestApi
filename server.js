const express = require("express");
const mustacheExpress = require("mustache-express");

const pool = require("./db");

// Import routes
const homeRoute = require("./routes/home");
const customerRoute = require("./routes/customers");

const app = express();
const port = 3000;

// set view engine
// https://www.npmjs.com/package/mustache-express#usage

app.engine("mustache", mustacheExpress());
app.set("views", __dirname + "/views");
app.set("view engine", "mustache");

app.use("/", homeRoute);
app.use("/customers", customerRoute);

app.listen(port, () =>
  console.log(`Listening on port: http://localhost:${port}`)
);
