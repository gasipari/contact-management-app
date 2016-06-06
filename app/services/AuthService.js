import HttpService from "HttpService";
import ApiConfig from "ApiConfig";

module.exports = {

    //Handle login action
    login(username, password, cb) {
        // Assign callback the last argument the function was called with
        cb = arguments[arguments.length - 1];

        // Check for token. If it exists, callback with true
        if (localStorage.token) {
            if (cb) cb(true);
            this.onChange(true);
            return;
        }

        // Run authentication request to get the token && store it on the client
        authenticationRequest(username, password, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token;
                if (cb) cb(true);
                this.onChange(true);
            } else {
                if (cb) cb(false);
                this.onChange(false);
            }
        });
    },
    // Return current token
    getToken() {
        return localStorage.token;
    },

    // Log out the user and destroys his token
    logout(cb) {
        delete localStorage.token;
        if (cb) cb();
        this.onChange(false);
    },

    // Return loggedIn boolean depening on token
    loggedIn() {
        return !!localStorage.token;
    },

    onChange() {}
};

//Post request to authenticate the user and retuns auth object in the callback
function authenticationRequest(username, password, cb) {
    HttpService.post(ApiConfig.authEndpoint,
        {
            username: username,
            password: password
        }
)
.then(function(response) {
    console.log("Authentication succeed!");
    cb({
        authenticated: true,
        token: JSON.parse(response).token,
        username: JSON.parse(response).username
    });
}, function(error) {
    console.log("Authentication failed! " + error);
    cb({
        authenticated: false
    });
});
}
