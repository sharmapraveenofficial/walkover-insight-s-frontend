import React, { Component } from "react";

export default class Logout extends Component {
  render() {
    return (
      <div>
        <div className="username">Hello, Guest!</div>
        <div className="tabbed">
          <input type="radio" name="tabs" id="tab-nav-1" defaultChecked />
          {/* <label htmlFor="tab-nav-1">Hello, Guest</label> */}
          <div className="tabs">
            <div>
              <p>You are currently logged-out please login for more details.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
