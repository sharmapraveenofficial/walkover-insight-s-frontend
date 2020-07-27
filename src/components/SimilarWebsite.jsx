import React, { Component } from "react";
import "react-tabs/style/react-tabs.css";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywords: [],
      website: [],
      isLoading: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.similarTo !== this.props.similarTo) {
      this.setState({ isLoading: true });
      fetch(
        `http://localhost:3000/similarWebsite/?similar=${this.props.similarTo}`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        }
      )
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error("failed to authenticate user");
        })
        .then(responseJson => {
          this.setState({
            isLoading: false,
            keywords: responseJson.keywords,
            website: responseJson.websites
          });
          console.log(responseJson.keywords);
        })
        .catch(error => {
          this.setState({
            authenticated: false,
            error: "Failed to authenticate user"
          });
        });
    }
  }

  render() {
    const { keywords, website, isLoading } = this.state;

    if (isLoading) {
      return <div className="loading">Loading...</div>;
    }
    return (
      <div>
        <div>
          <h2 className="similar_typo">Similar Keyword's And Website's</h2>
          <div className="similar-container">
            <div className="keywords">
              {keywords.map(item => (
                <div className="keyword-data">{item}</div>
              ))}
            </div>
            <div className="similar-website">
              {website.map(item => (
                <div className="similar-link">
                  <a href={item}>{item}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
