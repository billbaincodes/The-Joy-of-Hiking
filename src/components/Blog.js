import React, { Component } from "react";
import Parallax from "parallax-js";

class Blog extends Component {

  componentDidMount(){
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
  }

  render() {
    return (
      <div>
        <div id="scene">
          <div data-depth="0.2">
            <img src="https://via.placeholder.com/600" alt="dummy"></img>
          </div>
          <div data-depth="0.6">
          <img src="https://via.placeholder.com/600" alt="dummy"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
