// /customers

const pool = require("../db");

module.exports = {
  getById: async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query(
        "SELECT * FROM customers WHERE customer_id = ?",
        [req.params.id]
      );

      delete rows.meta;

      res.json(rows);
    } catch (err) {
      console.log("Error from customers getById()", err);
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
  getAllCustomers: async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();
      const rows = await conn.query("SELECT * FROM customers");

      delete rows.meta;

      res.json(rows);
    } catch (err) {
      console.log("Error from customers getAllCustomers() ", err);
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
};
