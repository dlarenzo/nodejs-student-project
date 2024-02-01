const myController = require("../controllers");
const routes = require("express").Router();

//  ROUTES.GET

routes.get("/", myController.awesomeFunction);

routes.get("/ttech", myController.getAllStudents);

//  ROUTES.USE

//student routes
routes.use("/students", require("./students"));

//  EXPORT ROUTES

module.exports = routes;
