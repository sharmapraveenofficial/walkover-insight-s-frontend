import Header from "./Header";
import React, { Component } from "react";
import "react-tabs/style/react-tabs.css";

export default class HomePage extends Component {
  state = {
    user: {},
    error: null,
    authenticated: false
  };

  componentDidMount() {
    fetch("http://localhost:3000/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    })
      .then(response => {
        if (response.status === 200) return response.json();
        throw new Error("failed to authenticate user");
      })
      .then(responseJson => {
        this.setState({
          authenticated: true,
          user: responseJson.user,
          data: responseJson.data
        });
        console.log(responseJson.data);
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div>
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <div>
          {!authenticated ? (
            <div class="tabbed">
              <input type="radio" name="tabs" id="tab-nav-1" checked />
              <label for="tab-nav-1">Logged-out</label>
              <div class="tabs">
                <div>
                  <h2>Logged-out</h2>
                  <h2>
                    You are currently logged-out if you want to see local
                    storage data click on extension popup and click on Search
                    all insight or Login
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="username">Hello {this.state.user.name}!</div>
              <div>
                <div className="tabbed">
                  <input type="radio" name="tabs" id="tab-nav-1" checked />
                  <label for="tab-nav-1">Search</label>
                  <input type="radio" name="tabs" id="tab-nav-2" />
                  <label for="tab-nav-2">Insight's</label>
                  <input type="radio" name="tabs" id="tab-nav-3" />

                  <div className="tabs">
                    <div>
                      <h2>Search</h2>
                      <div className="searchBox">
                        <input
                          className="searchInput"
                          type="text"
                          name=""
                          placeholder="Search"
                        />
                        <button className="searchButton" href="#">
                          <i class="material-icons">search</i>
                        </button>
                      </div>
                      <h2>My Bookmark's</h2>
                      <div className="bookmark-container">
                        {this.state.data.map(link => (
                          <div className="bookmark-div">
                            <div className="bookark-content">
                              <img
                                src={link.favicon}
                                class="bookmark-img"
                                alt=""
                                srcSet=""
                              />
                              <div className="bookmark-domain">{link.url}</div>
                              <div className="bookmark-hashtag">
                                {link.hashtag}
                              </div>
                              <div className="bookmark-time">
                                Time Spend : {link.trackedSeconds}
                              </div>
                              <div className="bookmark-similar">
                                <form
                                  action="http://localhost:3000/similarwebsite"
                                  method="get"
                                >
                                  <input
                                    type="submit"
                                    id="similar"
                                    value="Similar"
                                    name={link.similarWebsite}
                                  ></input>
                                </form>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h2>Insight's</h2>
                      <p>
                        Duis luctus dolor ac erat luctus hendrerit. Aenean id
                        congue magna. Proin sit amet elit vel lacus ornare
                        dignissim imperdiet nec odio. Maecenas condimentum
                        egestas lorem et laoreet. Donec ut leo non purus rutrum
                        euismod vel faucibus nunc. Curabitur vel mauris nisi,
                        vitae laoreet erat. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Vestibulum ante ipsum
                        primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Maecenas ipsum odio, iaculis id vulputate
                        vitae, vestibulum at nunc. Integer non nisl lorem.
                        Quisque lobortis congue semper. Nunc neque nisi,
                        consequat id egestas vitae, porta vel sem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
