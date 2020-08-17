// /customers

const pool = require("../db");

module.exports = {
  renderForm: async (req, res) => {
    try {
      res.render("customers");
    } catch (err) {
      console.log("Error from customerController.renderForm() ", err);
    }
  },
  createCustomer: async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();

      const { name, phone, city } = req.body;
      await conn.query(
        `
      INSERT INTO customers (name, phone, city) VALUES(?, ?, ?) 
      `,
        [name, phone, city]
      );

      const rows = await conn.query(`SELECT LAST_INSERT_ID() as customer_id`);
      delete rows.meta;

      res.status(200).json({ message: "Customer created", data: rows[0] });
    } catch (err) {
      console.log("Error from customers.createCustomer() ", err);
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
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
        res.status(200).json(rows[0]);
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
};
