import Header from "./Header";
import Main from "./main";
import Logout from "./Logout";
import React, { Component } from "react";
import "react-tabs/style/react-tabs.css";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      error: null,
      data: [],
      authenticated: false,
      isLoading: false
    };
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    this.setState({ isLoading: true });
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
          data: responseJson.data,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({
          authenticated: false,
          error: "Failed to authenticate user"
        });
      });
  }

  render() {
    const { authenticated, user, data} = this.state;

    return (
      <div>
        <Header
          authenticated={authenticated}
          handleNotAuthenticated={this._handleNotAuthenticated}
        />
        <div>
          {!authenticated ? <Logout /> : <Main user={user} data={data} />}
        </div>
      </div>
    );
  }

  _handleNotAuthenticated = () => {
    this.setState({ authenticated: false });
  };
}
