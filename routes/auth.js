const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();

const { validateRegister, validateLogin } = require("../validators/auth");

/**
 * To register User New
 */
router.post("/register", validateRegister, registerCtrl);

/**
 * Login User
 */
router.post("/login", validateLogin, loginCtrl);


module.exports = router;