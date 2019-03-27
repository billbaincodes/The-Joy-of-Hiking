import React, { Component } from "react";
import Thumbnail from "./Thumbnail"
import Card from "./Card.js"

class Home extends Component {

  render() {
    return (
      <div className="blog">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        
      </div>
    );
  }
}

export default Home;
