import React, { Component } from "react";
import Thumbnail from "./Thumbnail";

class Home extends Component {
  state = {
    trailList: [],
    loaded: false
  };

  componentDidMount() {
    this.dataFetcher();
  }

  dataFetcher = () => {
    fetch("https://joyofhiking.herokuapp.com/trail")
      .then(response => response.json())
      .then(json => this.setState({ trailList: json.trails, loaded: true }));
  };

  render() {
    return (
      <div className="blog">
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
