const pool = require("../db");

module.exports = {
  getHome: async (req, res) => {
    try {
      res.render("index");
    } catch (err) {
      console.log("Error from home getHome() ", err);
    }
  },
  postHome: async (req, res) => {
    const { customer_name, phone, city } = req.body;

    let conn;

    try {
      conn = await pool.getConnection();
      await conn.query(
        "INSERT INTO customers (customer_name, phone, city) VALUES(?, ?, ?)",
        [customer_name, phone, city]
      );
      const rows = await conn.query(
        `
      SELECT customer_id, customer_name, phone, city 
      FROM customers
      WHERE customer_name = ?`,
        [customer_name]
      );

      delete rows.meta;

      res.json(rows);
    } catch (err) {
      console.log("Error from home postHome()", err);
    } finally {
      if (conn) return conn.end();
    }
  },
};
