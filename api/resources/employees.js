/**
 * Routes for creating, reading, updating and deleting an employee.
 *
 */

var express = require("express");
var router = express.Router();

// route to manage employees

// GET /employees
router.get("/", function(req, res) {
    res.json({ message: "employees list here" });
});



module.exports = router;
