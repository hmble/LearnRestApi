const pool = require("../db");

module.exports = {
  // getOrder: (req, res) => {
  //   let conn;
  //   try {
  //    conn = await pool.getConnection();
  //     const rows = awai conn.query(`
  //     INSERT INTO orders (created_at, customer_id)
  //     `)
  //     res.render("orders");
  //   } catch (err) {
  //     console.log("Error from orders getOrder()", err);
  //   }
  // },
  getOrder: async (req, res) => {
    res.render("orders", { order_id: req.query["order_id"] });
  },
  getOrderById: async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();

      const rows = await conn.query(
        `
      SELECT * FROM orders
      WHERE orders.order_id = ?
      `,
        [req.params.id]
      );

      delete rows.meta;

      if (rows.length !== 0) {
        res.status(200).json(rows);
      } else {
        res.status(200).json({
          message: "Products does not exist. Please check product id",
        });
      }
    } catch (err) {
      console.log("Error from orders getOrderById()", err);
    } finally {
      if (conn) return conn.end();
    }
  },
  addOrderDetail: async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();

      const { product_id, quantity } = req.body;
      const order_id = req.query["order_id"];

      await conn.query(
        `
      INSERT INTO orderdetails (order_id, product_id, quantity, amount) VALUES (?, ?, ?, (SELECT buyprice * ? FROM products WHERE product_id = ?))
      `,
        [order_id, product_id, quantity, quantity, product_id]
      );
      res.status(200).json({ message: "order_created" });
    } catch (err) {
      console.log("error from addOrderDetail() ", err);
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
};
