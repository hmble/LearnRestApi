const pool = require("../db");

module.exports = {
  getHome: (req, res) => res.render("index"),
  postHome: (req, res) => {
    const { customer_name, phone, city } = req.body;
    console.log(req.body);
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
  },
};
