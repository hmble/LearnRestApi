// /customers

const Router = require("express-promise-router");
const router = Router();
const customerController = require("../controllers/customers.controller");

router.get("/:id", customerController.getById);
router.get("/:id/createOrder", customerController.createOrder);
router.get("/", customerController.getAllCustomers);

module.exports = router;
