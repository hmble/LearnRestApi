//const express = require("express");
//const bodyParser = require("body-parser");

const Router = require("express-promise-router");
const router = Router();

const homeController = require("../controllers/home");
//const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get("/", homeController.getHome);
//router.post("/", urlencodedParser, homeController.postHome);
router.post("/", homeController.postHome);

module.exports = router;
