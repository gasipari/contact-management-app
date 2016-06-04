import React from "react";
import Navigation from "Navigation";

const Main = (props) => {
    return (
    <div>
      <Navigation />
      <div className="row">
        <div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
