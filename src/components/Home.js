import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import RMNPThumbnail from '../components/RMNPThumbnail'

class Home extends Component {
  logger = () => {
    console.log("heyo");
  };

  render() {
    return (
      <div className="blog">

        <Thumbnail />
        <RMNPThumbnail />
      </div>
    );
  }
}

export default Home;
