import React from "react";
import {Link} from "react-router";

const Navigation = () => {
    return (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            Contact Management
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <Link to="/#" activeClassName="active-link">Logout</Link>
          </li>
      </ul>
      </div>
    </div>
  </div>
);
};

module.exports = Navigation;
