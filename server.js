const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "humblesam",
  connectionLimit: 5,
  database: "test",
});

const app = express();
const port = 3000;

// set view engine
// https://www.npmjs.com/package/mustache-express#usage

app.engine("mustache", mustacheExpress());
app.set("views", __dirname + "/views");
app.set("view engine", "mustache");

// body parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/", (req, res) => res.render("index"));
app.post("/", urlencodedParser, (req, res) => {
  const { customer_name, phone, city } = req.body;
  res.send("File submited;");

  pool
    .getConnection()
    .then((conn) => {
      return conn
        .query(
          "INSERT INTO customers (customer_name, phone, city) VALUES(?, ?, ?)",
          [customer_name, phone, city]
        )
        .then((x) => {
          console.log(x);
          conn.end();
        })
        .catch((err) => {
          console.log(err);
          conn.end();
        });
    })
    .catch((err) => {
      console.log("database not connected", err);
      conn.end();
    });
});

app.get("/customers/:id", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query("SELECT * FROM customers WHERE customer_id = ?", [req.params.id])
        .then((rows) => {
          delete rows.meta;
          //res.send(JSON.stringify(rows, "", 2));
          res.json(rows);
        })
        .catch((err) => {
          console.log(err);
          conn.end();
        });
    })
    .catch((err) => {
      console.log("database not connected", err);
      conn.end();
    });
});

app.get("/customers", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query("SELECT * FROM customers")
        .then((rows) => {
          delete rows.meta;
          res.json(rows);
        })
        .catch((err) => {
          console.log(err);
          conn.end();
        });
    })
    .catch((err) => {
      console.log("database not connected", err);
      conn.end();
    });
});
app.listen(port, () =>
  console.log(`Listening on port: http://localhost:${port}`)
);
