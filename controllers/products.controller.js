const pool = require("../db");

module.exports = {
  getProduct: (req, res) => {
    try {
      res.render("products");
    } catch (err) {
      console.log("Error from products getProduct()", err);
    }
  },
  createProduct: async (req, res) => {
    let conn;
    const { product_name, current_stock, sellprice, buyprice } = req.body;

    try {
      conn = await pool.getConnection();
      await conn.query(
        `INSERT INTO products ( product_name, current_stock, sellprice, buyprice ) VALUES(?, ?, ?, ?)`,
        [product_name, current_stock, sellprice, buyprice]
      );
      const rows = await conn.query(
        `
      SELECT product_id, product_name, current_stock, sellprice, buyprice  
      FROM products 
      WHERE product_name = ?`,
        [product_name]
      );

      delete rows.meta;

      res.status(200).json(rows);
    } catch (err) {
      console.log("Error from products createProduct()", err);
    } finally {
      if (conn) return conn.end();
    }
  },
  getProductById: async (req, res) => {
    let conn;

    try {
      conn = await pool.getConnection();

      const rows = await conn.query(
        `
      SELECT product_id, product_name, current_stock, sellprice, buyprice  
      FROM products 
      WHERE product_id= ?`,
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
      console.log("Error from products getProductById()", err);
    }
  },
};
