import React, { Component } from "react";
import Insight from "./Insight's";
import Bookmark from "./Bookmark";
import API from "./Api";

export default class Main extends Component {
  render() {
    const { user, data } = this.props;

    return (
      <div>
        <div className="username">Hello, {user.name}!</div>
        <div>
          <div className="tabbed">
            <input type="radio" name="tabs" id="tab-nav-1" defaultChecked />
            <label htmlFor="tab-nav-1">Search</label>
            <input type="radio" name="tabs" id="tab-nav-2" />
            <label htmlFor="tab-nav-2">Insight's</label>
            <input type="radio" name="tabs" id="tab-nav-3" />
            <label htmlFor="tab-nav-3">API</label>

            <div className="tabs">
              <div className="bookmark_hashtag">
                <div className="bookmark">
                  <Bookmark data={data} />
                </div>
              </div>
              <div>
                <Insight />
              </div>
              <div>
                <API />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
