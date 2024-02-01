// ADD EXPRESS
const express = require("express");

//  ADD EXPRESS ROUTER
const router = express.Router();

//  LINK STUDENT CONTROLLER
const StudentController = require("../controllers/index");

// ROUTERS TO PULL ALL STUDENTS, SINGLE STUDENT, CREATE STUDENT, UPDATE, DELETE

router.get("/", StudentController.getAllStudents);

router.get("/:id", StudentController.getSingleStudent);

router.post("/", StudentController.createStudent);

router.put("/:id", StudentController.updateStudent);

router.delete("/:id", StudentController.deleteStudent);

//  EXPORT ROUTER
module.exports = router;
