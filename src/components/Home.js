import React, { Component } from "react";
import Thumbnail from "./Thumbnail";

class Home extends Component {
  logger = () => {
    console.log("heyo");
  };

  render() {
    return (
      <div className="blog">
        <div class="bg">
          <div class="mountain">
            <div class="mountain-top">
              <div class="mountain-cap-1" />
              <div class="mountain-cap-2" />
              <div class="mountain-cap-3" />
            </div>
          </div>
          <div class="mountain-two">
            <div class="mountain-top">
              <div class="mountain-cap-1" />
              <div class="mountain-cap-2" />
              <div class="mountain-cap-3" />
            </div>
          </div>
          <div class="mountain-three">
            <div class="mountain-top">
              <div class="mountain-cap-1" />
              <div class="mountain-cap-2" />
              <div class="mountain-cap-3" />
            </div>
          </div>
          <div class="cloud" />
        </div>

        <Thumbnail />
      </div>
    );
  }
}

export default Home;
