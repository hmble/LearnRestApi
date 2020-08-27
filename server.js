const express = require("express");
const cors = require("cors");
const mustacheExpress = require("mustache-express");

const pool = require("./db");
const bodyParser = require("body-parser");

// Import routes
const customerRoute = require("./routes/customers.routes");
const productRoute = require("./routes/products.routes");

const app = express();
const port = 4000;

// set view engine
// https://www.npmjs.com/package/mustache-express#usage

app.engine("mustache", mustacheExpress());
app.set("views", __dirname + "/views");
app.set("view engine", "mustache");

// use bodyparser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/customers", customerRoute);
app.use("/products", productRoute);

app.listen(port, () =>
  console.log(`Listening on port: http://localhost:${port}`)
);
