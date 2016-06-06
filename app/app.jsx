import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import Main from "Main";
import ContactHome from "ContactHome";
import Login from "Login";
import AuthService from "AuthService";

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
ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="login" component={Login} />
    <IndexRoute component={ContactHome} onEnter={requireAuth} />
  </Route>
</Router>,
  document.getElementById("app")
);
