/**
 * Utility to create an admin user in DB.
 *
 */
var path = require("path"),
    User = require(path.join(__dirname, "models", "user.js")),
    mongoose_uri = process.env.MONGOOSE_URI || "localhost:27017/contact-management-api";

var args = process.argv.slice(2);

var username = args[0];
var password = args[1];

// validate input
if (args.length < 2) {
    console.log("usage: node %s %s %s", path.basename(process.argv[1]), "user", "password");
    process.exit();
}

console.log("Username: %s", username);
console.log("Password: %s", "**only you know it**");

console.log("Creating a new user in Mongo");

// instantiate mongoose
var mongoose = require("mongoose");
mongoose.set("debug", true);

// connect to mongo
mongoose.connect(mongoose_uri);
mongoose.connection.on("error", function () {
    console.log("Mongoose connection error", arguments);
});
mongoose.connection.once("open", function callback() {
    console.log("Mongoose connected to the database");

    // create a new user
    var user = new User();

    user.username = username;
    user.password = password;

    // save the user
    user.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
        process.exit();
    });
});
