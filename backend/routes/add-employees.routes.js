//import express module
const express = require("express");
//import router on express
 const router = express.Router();
//import the employees controler
const employeesController = require("../controllers/employees.controller");
//create post request to handle add-employee
router.post("/add-employee", employeesController.addEmployee);

module.exports = router;
