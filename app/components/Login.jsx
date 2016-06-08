import React from "react";
import AuthService from "AuthService";
import {withRouter} from "react-router";

const Login = withRouter(
  React.createClass({

      getInitialState() {
          return {
              error: false
          };
      },
      handleSubmit(event) {
          event.preventDefault();
          // grab user credentials from the DOM
          const username = this.refs.username.value;
          const password = this.refs.password.value;

          // check if form is valid
          if (username && password) {
              // auth request to API
              AuthService.login(username, password, (loggedIn) => {
                  if (!loggedIn){
                      return this.setState({ error: true });
                  }
                  const { location } = this.props;
                  // Check the browser history and navigate to the next path in the router
                  if (location.state && location.state.nextPathname) {
                      this.props.router.replace(location.state.nextPathname);
                  } else {
                      // If no path in the location, go to root path
                      this.props.router.replace("/");
                  }
              });
          } else {
              alert("Invalid form");
          }
      },
      render() {
          return (
        <div className="colum small-centered medium-6 large-4">
        <div className="login__containter">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="small-3 columns">
              <label htmlFor="name" className="text-right middle">Username</label>
            </div>
            <div className="small-9 columns">
              <input type="text" id="username" ref="username"
                placeholder="Enter a username.." required/>
            </div>
          </div>
          <div className="row">
            <div className="small-3 columns">
              <label htmlFor="position" className="text-right middle">Password</label>
            </div>
            <div className="small-9 columns">
              <input type="password" id="password" ref="password"
                placeholder="Enter a password.." required/>
            </div>
          </div>
          <div className="login__actions">
          <button type="submit" className="button primary">Login</button>
          </div>
          {this.state.error && (
            <p>Bad login information</p>
          )}
        </form>
        </div>
      </div>
      );
      }
  })
);

module.exports = Login;
