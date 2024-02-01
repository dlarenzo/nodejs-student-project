// ADD EXPRESS
const express = require("express");

//  ADD EXPRESS ROUTER
const router = express.Router();

//  LINK STUDENT CONTROLLER
const StudentController = require("../controllers/index");

// ROUTERS TO PULL ALL STUDENTS, SINGLE STUDENT, CREATE STUDENT

router.get("/", StudentController.getAllStudents);

router.get("/:id", StudentController.getSingleStudent);

router.post("/", StudentController.createStudent);

//  EXPORT ROUTER
module.exports = router;
