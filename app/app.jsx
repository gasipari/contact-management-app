import React from "react";
import ReactDOM from "react-dom";
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import Main from "Main";
import ContactHome from "ContactHome";

// Load foundation
$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={Main}>
    <IndexRoute component={ContactHome} />
  </Route>
</Router>,
  document.getElementById("app")
);
