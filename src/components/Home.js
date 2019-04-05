import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import RMNPThumbnail from "../components/RMNPThumbnail";

class Home extends Component {
  state = {
    trailList: [],
    loaded: false
  };

  componentDidMount() {
    this.dataFetcher();
  }

  dataFetcher = () => {
    fetch("http://localhost:3000/trail")
      .then(response => response.json())
      .then(json => this.setState({ trailList: json.trails, loaded: true }));
  };

  render() {
    return (
      <div className="blog">
        {/* <Thumbnail />
        <RMNPThumbnail /> */}

        {this.state.loaded ? (
            this.state.trailList.map(trail => {
              return (
                <Thumbnail
                  trailData={trail}
                />
              );
            })
          ) : (
            "Waking up server. Please wait a few minutes."
          )}

      </div>
    );
  }
}

export default Home;
