// import libs
var express = require("express");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var morgan = require("morgan");
var api = require("./api/resources");


// CONFIG ====
// If undefined in the process load local file
if(!process.env.ACCESS_TOKEN_SECRET) {
    /*eslint no-unused-vars: 0*/
    var env = require("./env.js");
}
// set the port
const PORT = process.env.PORT;

// connect to MongoDB
var mongoose = require("mongoose");
mongoose.connect(process.env.MONGOOSE_URI);

// create the server
var app = express();

// add security middleware
app.use(helmet());

// use morgan to log all requests to the console
app.use(morgan("dev"));

// API ====
// setup bodyParser for POST requests
app.use(bodyParser.json({limit : "100kb"}));

// register API routes ====
app.use("/api", api);

// CLIENT ====
// serving client
app.use(express.static("public"));

// start the server
app.listen(PORT, function() {
    console.log("Express server is up on port " + PORT);
});
