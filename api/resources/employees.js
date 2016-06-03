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
    res.json({ message: "employees list here" });
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
        // if there successfully saved
        res.json({ message: "Employee with ID: " + employee._id + " has been created"});
    });
});



module.exports = router;
