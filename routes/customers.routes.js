// /customers

const Router = require("express-promise-router");
const router = Router();
const customerController = require("../controllers/customers");

router.get("/:id", customerController.getById);
router.get("/", customerController.getAllCustomers);

module.exports = router;
