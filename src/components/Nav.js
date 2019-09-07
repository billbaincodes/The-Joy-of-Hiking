import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    searchValue: ""
  };

  searchListener = e => {
    e.preventDefault();
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Link className="navbar-brand" to="/">
          The Joy of Hiking
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Features
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                River
              </a>
              <a className="dropdown-item" href="#">
                Lake
              </a>
              <a className="dropdown-item" href="#">
                Mountain
              </a>
              <a className="dropdown-item" href="#">
                Flower
              </a>
            </div>
          </li> */}
          <li className="nav-item">
              <Link className="nav-link" to="search">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
