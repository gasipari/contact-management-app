import React from "react";
import {Link} from "react-router";
import AuthService from "AuthService";

const Navigation = React.createClass({

    logout() {
        if (AuthService.loggedIn) {
            AuthService.logout();
        }
    },
    render() {
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
              {AuthService.loggedIn() ? (
                <Link to="/login" onClick={this.logout}>Log out</Link>
              ) : (
                ""
              )}
          </li>
      </ul>
      </div>
    </div>
  </div>
      );
    }
});

module.exports = Navigation;
