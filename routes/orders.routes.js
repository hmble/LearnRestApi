const Router = require("express-promise-router");
const router = Router();

const ordersController = require("../controllers/orders.controller");
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", ordersController.getOrder);
router.post("/", ordersController.addOrderDetail);

// router.get("/:id", ordersController.getProductById);

module.exports = router;
