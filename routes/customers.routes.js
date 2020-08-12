// /customers

const Router = require("express-promise-router");
const router = Router();
const customerController = require("../controllers/customers.controller");

router.get("/:id", customerController.getById);
router.get("/getAllCustomers", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.get("/", customerController.renderForm);

module.exports = router;
