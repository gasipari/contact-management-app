/**
 * Index for all API resources.
 *
 */

var express = require("express");
var authenticateRouter = require("./authenticate");
var employeeRouter = require("./employees");

// create instance of express router
var router = express.Router();

// index route
router.get("/", function(req, res) {
    res.json({ message: "Welcome to contact management api" });
});

// register route to authenticate users
router.use("/auth", authenticateRouter);

// register route to manage employees
router.use("/employees", employeeRouter);


module.exports = router;
