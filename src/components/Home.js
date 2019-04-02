import React, { Component } from "react";
import Thumbnail from "./Thumbnail"
import data from "../data.json"

class Home extends Component {

  logger = () => {
    console.log(data)
  }


  render() {
    return (
      <div className="blog">
        <button onClick={this.logger}>heyo</button>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    );
  }
}

export default Home;
