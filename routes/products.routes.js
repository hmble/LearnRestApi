const Router = require("express-promise-router");
const router = Router();
const productsController = require("../controllers/products.controller");

router.get("/", productsController.renderForm);
router.post("/", productsController.createProduct);
router.get("/id/:id", productsController.getProductById);
router.get("/all", productsController.getAllProducts);

module.exports = router;
