import React, { Component } from "react";

export default class Logout extends Component {
  render() {
    return (
      <div className="tabbed">
        <input type="radio" name="tabs" id="tab-nav-1" />
        <label htmlFor="tab-nav-1">Logged-out</label>
        <div className="tabs">
          <div>
            <h2>Logged-out</h2>
            <h2>
              You are currently logged-out if you want to see local storage data
              click on extension popup and click on Search all insight or Login
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
