import React from "react";
import ReactDOM from "react-dom";

// Load foundation
$(document).foundation();

// App css
require("style!css!sass!applicationStyles");

ReactDOM.render(
  <p>contact-management-app</p>,
  document.getElementById("app")
);
