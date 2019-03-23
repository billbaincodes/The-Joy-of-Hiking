import React, { Component } from "react";
import Card from "./Card.js"

class Blog extends Component {

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

export default Blog;
