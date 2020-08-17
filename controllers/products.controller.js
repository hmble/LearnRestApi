const pool = require("../db");

module.exports = {
  renderForm: async (req, res) => {
    try {
      res.render("products");
    } catch (err) {
      console.log("Error from productsController.renderForm() ", err);
    }
  },
  createProduct: async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();
      const { name, price, buyprice } = req.body;

      await conn.query(
        `
      INSERT INTO products (product_name, price, buyprice) VALUES (?,?,?)
      `,
        [name, price, buyprice]
      );

      const rows = await conn.query(`SELECT LAST_INSERT_ID() as product_id`);

      delete rows.meta;

      //TODO(hmble): return object instead of array
      res
        .status(200)
        .json({ message: "Product created successfully", data: rows });
    } catch (err) {
      console.log("Error from productsController.createProdcut() ", err);
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
  getProductById: async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();

      const rows = await conn.query(
        `
      SELECT * FROM products
      WHERE product_id = ?
      `,
        req.params.id
      );

      delete rows.meta;

      if (rows.length !== 0) {
        res.status(200).json({ data: rows[0] });
      } else {
        res
          .status(200)
          .json({ message: "Product does not exist. Please check product id" });
      }
    } catch (err) {
      console.log("Error from products.getProductById() ", err);
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
  getAllProducts: async (req, res) => {
    let conn;

    try {
      conn = await pool.getConnection();

      const rows = await conn.query(`
      SELECT * FROM products
      `);

      delete rows.meta;
      res.status(200).json(rows);
    } catch (err) {
    } finally {
      if (conn) {
        return conn.end();
      }
    }
  },
};
