//import express
 const express = require("express");
//import rourer on express
const router = express.Router();
//import the login controller
const loginController = require("../controllers/login.controler");
//pass the login request to loin controller 
router.post("/login", loginController.login);

module.exports = router;
