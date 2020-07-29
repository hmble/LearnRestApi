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

      if (rows.length !== 0) {
        res.status(200).json(rows);
      } else {
        res.status(200).json({
          message: "Customer does not exist. Please check customer id",
        });
      }
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
  createOrder: async (req, res) => {
    let conn;

    try {
      conn = await pool.getConnection();

      await conn.query(
        `
      INSERT INTO orders (created_at, customer_id, is_paid) VALUES (NOW(), ?, false)
      `,
        req.params.id
      );

      const rows = await conn.query("SELECT LAST_INSERT_ID() as order_id");

      delete rows.meta;

      res.redirect(`/orders?order_id=${rows[0].order_id}`);
    } catch (err) {
      console.log("Error from customers createOrder() ", err);
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
};
