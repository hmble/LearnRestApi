const Router = require("express-promise-router");
const router = Router();

const productsController = require("../controllers/products");
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", productsController.getProduct);
//router.post("/", urlencodedParser, homeController.postHome);
router.post("/", productsController.createProduct);

router.get("/:id", productsController.getProductById);

module.exports = router;
