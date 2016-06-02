// import libs
var express = require("express");
var bodyParser = require("body-parser");

// create the server
var app = express();

// setup bodyParser so that we get data from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API routes

// create instance of express router
var router = express.Router();

// set the port
const PORT = process.env.PORT || 3000;

// serving client
app.use(express.static("public"));

// start the server
app.listen(PORT, function() {
    console.log("Express server is up on port " + PORT);
});
