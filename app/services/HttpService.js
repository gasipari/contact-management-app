

// Wrapper for http calls
module.exports = {

    // POST request
    post(url, data) {
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Usual XHR settings
            let req = new XMLHttpRequest();
            req.open("POST", url);
            req.setRequestHeader("Authorization", "JWT " + localStorage.token);
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            req.setRequestHeader("Accept", "application/json");

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response data
                    resolve(req.response);
                } else if (req.status == 401) {
                    reject(Error(req.statusText));
                    // session/token expired the force login
                    // window.location.href = "/#/login";
                } else {
                    reject(Error("Error while fetching data"));
                }
            };

            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send(JSON.stringify(data));
        });
    },

    // GET request
    get(url, token) {
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Usual XHR settings
            let req = new XMLHttpRequest();
            req.open("GET", url);
            req.setRequestHeader("Authorization", "JWT " + token);
            req.setRequestHeader("Accept", "application/json");
            req.responseType = "json";

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response data
                    resolve(req.response);
                } else if (req.status == 401) {
                    reject(Error(req.statusText));
                    // session/token expired the force login
                    // window.location.href = "/#/login";
                } else {
                    reject(Error("Error while fetching data"));
                }
            };

            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    },

	// PUT request
    put(url, data, token) {
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Usual XHR settings
            let req = new XMLHttpRequest();
            req.open("PUT", url);
            req.setRequestHeader("Authorization", "JWT " + token);
            req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            req.setRequestHeader("Accept", "application/json");

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response data
                    resolve(req.response);
                }
                else if (req.status == 401) {
                    console.log(req.statusText);
                    reject(Error(req.statusText));
                    // session/token expired the force login
                    // window.location.href = "/#/login";
                } else {
                    reject(Error("Error while fetching data"));
                }
            };

            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send(JSON.stringify(data));
        });
    },

    // DELETE request
    delete(url, token) {
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Usual XHR settings
            let req = new XMLHttpRequest();
            req.open("DELETE", url);
            req.setRequestHeader("Authorization", "JWT " + token);
            req.setRequestHeader("Accept", "application/json");

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status == 200) {
                    // Resolve the promise with the response data
                    resolve(req.response);
                } else if (req.status == 401) {
                    console.log(req.statusText);
                    reject(Error(req.statusText));
                    // session/token expired the force login
                    // window.location.href = "/#/login";
                } else {
                    reject(Error("Error while fetching data"));
                }
            };

            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    }
};
