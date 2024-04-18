const express = require("express");
const router = express.Router();
const controllers = require("../controllers/controller");

router.route("/").get(controllers.home);
router.route("/register").post(controllers.register);
router.route("/login").post(controllers.login);

module.exports=router;