const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const awesomeFunction = (req, res, next) => {
  res.json("THIS IS AMAZING!");
};

const tooeleTech = (req, res, next) => {
  res.json("Tooele Tech is Awesome!");
};

//  GET ALL STUDENTS
const getAllStudents = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("students").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//  GET SINGLE STUDENT
const getSingleStudent = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("students")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

//  CREATE CONTACT STUDENT
const createStudent = async (req, res) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      age: req.body.age,
      currentCollege: req.body.currentCollege,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("students")
      .insertOne(student);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while creating the student."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// EXPORT TO ANOTHER FILE
module.exports = {
  awesomeFunction,
  tooeleTech,
  getAllStudents,
  getSingleStudent,
  createStudent,
};
