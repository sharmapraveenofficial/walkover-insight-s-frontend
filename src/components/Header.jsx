import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { authenticated } = this.props;
    return (
      <div className="container">
        <span className="badge">
          <a className="badge-link" href="/">
            Walkover Insight's
          </a>
        </span>
        <div className="button">
          {authenticated ? (
            <input
              type="submit"
              onClick={this._handleLogoutClick}
              value="Logout"
            ></input>
          ) : (
            <input
              type="submit"
              onClick={this._handleSignInClick}
              value="LogIn"
            ></input>
          )}
        </div>
      </div>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open("http://localhost:3000/auth/google", "_self");
  };

  _handleLogoutClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open("http://localhost:3000/logout", "_self");
    this.props.handleNotAuthenticated();
  };
}
