const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const homeController = require("../controllers/home");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", homeController.getHome);
router.post("/", urlencodedParser, homeController.postHome);

module.exports = router;
