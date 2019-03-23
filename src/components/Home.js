import React, { Component } from "react";
import Card from "./Card.js"

class Home extends Component {

  render() {
    return (
      <div className="blog">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Home;
