const Router = require("express-promise-router");
const router = Router();

const ordersController = require("../controllers/orders.controller");
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", ordersController.getOrder);
//router.post("/", urlencodedParser, homeController.postHome);
//router.post("/", ordersController.createProduct);

router.get("/:id", ordersController.getOrderById);

module.exports = router;
