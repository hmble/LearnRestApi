// /customers

const Router = require("express-promise-router");
const router = Router();
const customerController = require("../controllers/customers.controller");

router.get("/id/:id", customerController.getById);
router.get("/all", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.get("/", customerController.renderForm);

module.exports = router;
