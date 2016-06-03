/**
 * Route for authenticating admin user.
 *
 */

var express = require("express");
var User = require("../models/user");
var jwt = require("jsonwebtoken");

var router = express.Router();

// route to authenticate users (POST /authenticate)
router.post("/", function (req, res) {
  // find user
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        // check for error
        if (err){
            console.log("err in DB");
            throw err;
        }
        // if user doesn't exist
        if (!user) {
            console.log("user doesn't exist in DB");
            res.status(401).send({message: "Authentication failed. User not found."});
        } else if (user) { // if user exists
            console.log("User exist in DB - comparePassword");
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                // check if the password matches the one in DB
                if (isMatch && !err) {
                    console.log("User authenticated, generating token for user: %s", user.username);

                    // create a token that expires in one hour
                    var token = jwt.sign(
                      {_id: user._id},
                      process.env.ACCESS_TOKEN_SECRET,
                      {expiresIn: 3600}
                    );
                    var decoded = jwt.decode(token);
                    var token_exp = decoded.exp;
                    var token_iat = decoded.iat;

                    // returns user info
                    res.json (
                        {
                            token: token,
                            tokenExp: token_exp,
                            tokenIat: token_iat,
                            username: user.username
                        });
                } else { // Unauthorized Access Error 401
                    // returns Error
                    res.status(401).json (
                      {message: "Authentication failed. Invalid username or password"}
                    );
                    console.log("User not authenticated, Invalid username or password");
                }
            });
        }
    });
});
module.exports = router;
