import React, { Component } from "react";
import TrailTable from "./TrailTable.js";

class SearchResult extends Component {
  state = {
    searchValue: "",
    trailList: [],
    loaded: false
  };

  searchListener = e => {
    this.setState({ searchValue: e.target.value });
  };

  resultFetcher = e => {
    e.preventDefault();
    fetch(
      `https://joyofhiking.herokuapp.com/trail/search/${this.state.searchValue}`
    )
      .then(response => response.json())
      .then(json => this.setState({ trailList: json.trails, loaded: true }));
  };

  render() {
    return (
      <div className="search-page">
        <form className="form-inline my-2 my-lg-0">
          <input
            onChange={this.searchListener}
            value={this.state.searchValue}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by Trail Name"
            aria-label="Search"
          />
          <button
            onClick={this.resultFetcher}
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div>
          {this.state.loaded ? (
            <TrailTable trailData={this.state.trailList} />
          ) : (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Park</th>
                  <th scope="col">Trailhead</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default SearchResult;
