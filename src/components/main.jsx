import React, { Component } from "react";
import Insight from "./Insight's";
import Bookmark from "./Bookmark";
import API from "./Api";

export default class Main extends Component {
  render() {
    const { user, data } = this.props;
    let hashtag = [];
    data.map(item => {
      if (item.hashtag !== "#Bookmark") {
        let splitHashTag = item.hashtag.split(" ");
        splitHashTag.forEach(split => {
          hashtag.push(split);
        });
      }
      return hashtag;
    });

  function removeDups(uniqueHashtag) {
  let unique = {};
  uniqueHashtag.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

   let value=removeDups(hashtag);
    return (
      <div>
        <div className="username">Hello, {user.name}!</div>
        <div>
          <div className="tabbed">
            <input type="radio" name="tabs" id="tab-nav-1" />
            <label htmlFor="tab-nav-1">Search</label>
            <input type="radio" name="tabs" id="tab-nav-2" />
            <label htmlFor="tab-nav-2">Insight's</label>
            <input type="radio" name="tabs" id="tab-nav-3" />
            <label htmlFor="tab-nav-3">API</label>

            <div className="tabs">
              <div>
                <Bookmark data={data} />
              </div>
              <div>
                <Insight />
              </div>
              <div>
                <API />
              </div>
            </div>
          </div>
          <div className="hashtag">
            {value.map(item => (
              <div>{item}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
