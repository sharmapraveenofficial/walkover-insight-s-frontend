import PropTypes from "prop-types";
import React, { Component } from "react";
import './bootstrap/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap';
// import NavDropdown from 'react-bootstrap/NavDropdown';


export default class Header extends Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired
  };

  render() {
    const { user, data } = this.props;
    const { authenticated } = this.props;
    return (
          <>
<nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
    <a href="#" class="navbar-brand d-flex w-50 mr-auto" id="badge"> Walkover Insights</a>
    <div class="navbar-collapse collapse w-100">
        <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
            <li class="nav-item">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" id ="dropdown"> Hello!</a>
            <div className="dropdown-menu">
            <a classNames="dropdown-item" href="#" id ="dropdown"> Logout</a>
            </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" id ="extension" href="https://chrome.google.com/webstore/detail/toolmark-a-bookmark-manag/iaccedgdmhegoagdfmlpafaehmokckdn"> Download extention</a>
            </li>
        </ul>
    </div>
</nav>
  </>
    );
  }
}
    
    
    {/* (
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
              onClick={this._handleDownloadClick}
              value="Download Extention"
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
      </>
    );
  }

  _handleSignInClick = () => {
    // Authenticate using via passport api in the backend
    // Open Twitter login page
    window.open(`http://localhost:3000/auth/google`, "_self");
  };

  _handleDownloadClick = () => {
    // Logout using Twitter passport api
    // Set authenticated state to false in the HomePage component
    window.open(`https://chrome.google.com/webstore/detail/toolmark-a-bookmark-manag/iaccedgdmhegoagdfmlpafaehmokckdn`, "_self");
    this.props.handleNotAuthenticated();
  };
} */}
