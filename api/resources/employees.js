/**
 * Routes for creating, reading, updating and deleting an employee.
 *
 */

var express = require("express");
var router = express.Router();
var Employee = require("../models/employee");

// route to manage employees

// GET /employees
router.get("/", function(req, res) {

    // query mongo to retrieve all employees
    Employee.find(function (err, employees) {
        // check for Error
        if (err) res.send(err);

        //if no error, returns the list of all employees
        res.json(employees);
    });
});

// POST /employees
router.post("/", function(req, res) {

    // create an employee
    var employee = new Employee();

    // set employee's properties
    employee.name = req.body.name;
    employee.position = req.body.position;
    employee.phone = req.body.phone;
    employee.email = req.body.email;

    // save employee to DB
    employee.save(function(err) {
        if (err) res.send(err);
        // if successfully saved
        res.json({ message: "Employee with ID: " + employee._id + " has been created"});
    });
});



module.exports = router;
