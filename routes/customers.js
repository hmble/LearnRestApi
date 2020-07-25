// /customers

const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customers");

router.get("/:id", customerController.getById);
router.get("/", customerController.getAllCustomers);

module.exports = router;
