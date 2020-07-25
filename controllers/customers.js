// /customers

const pool = require("../db");

module.exports = {
  getById: (req, res) => {
    pool
      .getConnection()
      .then((conn) => {
        conn
          .query("SELECT * FROM customers WHERE customer_id = ?", [
            req.params.id,
          ])
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
  },
  getAllCustomers: (req, res) => {
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
  },
};
