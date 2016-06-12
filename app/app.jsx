import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";
import Main from "Main";
import ContactHome from "ContactHome";
import Login from "Login";
import AuthService from "AuthService";

let store = require("configureStore").configure();

// changes listinner on the store
store.subscribe(() => {
    console.log("New state", store.getState());
});

// Load foundation
$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

//
function requireAuth(nextState, replace) {
    if (!AuthService.loggedIn()) {
        replace({
            pathname: "/login", state: { nextPathname: nextState.location.pathname }
        });
    }
}

//
const routes = (
<Provider store={store}>
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="login" component={Login} />
    <IndexRoute component={ContactHome} onEnter={requireAuth} />
  </Route>
</Router>
</Provider>
);

ReactDOM.render(routes, document.getElementById("app")
);
