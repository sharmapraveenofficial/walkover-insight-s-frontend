/* eslint-disable */
import PropTypes from "prop-types";
import React, { Component } from "react";
import Similar from "./SimilarWebsite";

function searchFor(search) {
  return function(x) {
    return x.hashtag.toLowerCase().includes(search.toLowerCase()) || !search;
  };
}

export default class Bookmark extends Component {
  static propTypes = {
    user: PropTypes.object,
    data: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      similar: "",
      similarDomain: "",
      currentPage: 1,
      dataPerPage: 5,
      search: "",
      anchor: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.hashtagChange = this.hashtagChange.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  similarChange = e => {
    console.log(this.props.data);
    const item = e.target.value;
    console.log(e);
    this.setState({ similar: item, change: true });
  };

  searchHandler = e => {
    this.setState({ search: e.target.value });
    this.setState({ anchor: "" });
  };

  hashtagChange = e => {
    console.log(e.target.name);
    this.setState({ anchor: e.target.name });
    // console.log(this.state.anchor);
  };

  render() {
    const { data } = this.props;
    const { currentPage, dataPerPage } = this.state;

    const indexOfLastPage = currentPage * dataPerPage;
    const indexOfFirstPage = indexOfLastPage - dataPerPage;
    let currentData = data.slice(indexOfFirstPage, indexOfLastPage);

    if (this.state.search === "" ? currentData : (currentData = data));

    let anchorData = [];

    if (this.state.anchor !== "") {
      anchorData = data.filter(item => {
        if (item.hashtag.indexOf(this.state.anchor) !== -1) {
          return item;
        }
      });
    }

    if (anchorData.length > 0) {
      currentData = anchorData;
    }
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <button
          className="li-page"
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </button>
      );
    });

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
        if (!unique[i]) {
          unique[i] = true;
        }
      });
      return Object.keys(unique);
    }

    let value = removeDups(hashtag);

    return (
      <div>
        <div className="bookmarks_main">
          <div className="hashtag">
            {value.map(item => (
              <a
                href="#"
                className="hashtag_clickable"
                name={item}
                onClick={this.hashtagChange.bind(this)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="my_bookmarks">
            <div className="searchBox">
              <input
                className="searchInput"
                type="text"
                name=""
                value={this.state.search}
                placeholder="Search Based on HashTag"
                onChange={this.searchHandler}
              />
              {this.state.anchor !== "" ? (
                <a
                  href="#"
                  className="resetHashtag"
                  name="Reset"
                  onClick={this.hashtagChange.bind(this)}
                >
                  Reset
                </a>
              ) : (
                <a
                  disable
                  href="#"
                  className="resetHashtag"
                  name="Reset"
                  onClick={this.hashtagChange.bind(this)}
                >
                  Reset
                </a>
              )}
            </div>
            <div className="bookmark-container">
              {currentData.filter(searchFor(this.state.search)).map(link => (
                <div className="bookmark-div">
                  <div className="bookark-content">
                    <img
                      src={link.favicon}
                      className="bookmark-img"
                      alt=""
                      srcSet=""
                    />
                    <div className="bookmark-domain">{link.url}</div>
                    <div className="bookmark-hashtag">{link.hashtag}</div>
                    <div className="bookmark-time">
                      Time Spend : {link.trackedSeconds}
                    </div>
                    <div className="bookmark-similar">
                      <button
                        className={
                          this.state.similar === link.similarWebsite
                            ? "buttonTrue"
                            : "buttonFalse"
                        }
                        value={link.similarWebsite}
                        onClick={this.similarChange.bind(this)}
                      >
                        Similar
                      </button>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}

              <div id="page-numbers">{renderPageNumbers}</div>
            </div>
          </div>
          <hr />
          <div className="similar_website">
            <Similar
              similarTo={this.state.similar}
              similar={this.state.similarDomain}
            />
          </div>
        </div>
      </div>
    );
  }
}
