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
      search: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
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
  };

  render() {
    const { data } = this.props;
    const { currentPage, dataPerPage } = this.state;

    const indexOfLastPage = currentPage * dataPerPage;
    const indexOfFirstPage = indexOfLastPage - dataPerPage;
    let currentData = data.slice(indexOfFirstPage, indexOfLastPage);

    if (this.state.search === "" ? currentData : (currentData = data));
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
    return (
      <div className="bookmarks_main">
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
            {/* <button className="searchButton" href="#">
              <i className="material-icons">search</i>
            </button> */}
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
                      value={link.similarWebsite}
                      className="button_similar"
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
    );
  }
}
