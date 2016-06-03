/**
 * Token validation for protected routes
 *
 */

var jwt = require("jsonwebtoken");

var verify = function (req, res, next){
    // decode token
    if (req.headers && req.headers.authorization){
        var authorization = req.headers.authorization;
        var part = authorization.split(" ");
        if (part.length === 2) {
            var token = part[1];
            console.log("Token received. Authenticating...");
            // verifies secret and checks expiration
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err, decoded) {
                if (err) {
                    console.log("Failed to authenticate token.");
                    return res.status(401).send(err);
                } else {
                    // if everything ok, attach decoded obj to the request
                    console.log("Token validated.");
                    req.decoded = decoded;
                    next();
                }
            });
        }
    } else {
    // if there is no token
    // return an error
        console.log("No token provided.");
        return res.status(403).send({
            success: false,
            message: "No token provided."
        });
    }
};

module.exports = verify;
