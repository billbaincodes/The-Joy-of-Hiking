import React, { Component } from "react";
import CarouselItem from "../components/CarouselItem.js";
import FlowerBadge from "../components/badges/FlowerBadge.js";
import MtnBadge from "../components/badges/MtnBadge.js";
import RiverBadge from "../components/badges/RiverBadge.js";
import WaterfallBadge from "../components/badges/WaterfallBadge.js";
import RedrockBadge from "../components/badges/RedrockBadge.js";
import LakekBadge from "../components/badges/LakeBadge.js";

class Card extends Component {
  state = {
    gallery: [],
    loaded: false
  };

  componentDidMount() {
    this.galleryFetcher();
  }

  galleryFetcher = () => {
    fetch(
      `https://joyofhiking.herokuapp.com/gallery/${
        this.props.location.state.trailData.id
      }`
    )
      .then(response => response.json())
      .then(json => this.setState({ gallery: json.gallery, loaded: true }));
  };

  galleryBuilder = () => {
    let remainingImages = this.state.gallery.slice(1);
    return remainingImages.map(image => {
      return <CarouselItem image={image} />;
    });
  };

  render() {
    return (
      <div className="card-page">
        <div className="card">
          <div className="card-head">
            <div className="card-title">
              {this.props.location.state.trailData.name}
            </div>
            <div className="tooltip-list">
              {this.props.location.state.trailData.flower && <FlowerBadge />}
              {this.props.location.state.trailData.mtn && <MtnBadge />}
              {this.props.location.state.trailData.river && <RiverBadge />}
              {this.props.location.state.trailData.redrock && <RedrockBadge />}
              {this.props.location.state.trailData.lake && <LakekBadge />}
              {this.props.location.state.trailData.waterfall && (
                <WaterfallBadge />
              )}
            </div>
          </div>
          <p>{this.props.location.state.trailData.description}</p>

          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {this.state.loaded ? (
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={this.state.gallery[0].imgURL}
                    alt="trail"
                  />
                </div>
              ) : (
                "Fetching Gallery"
              )}
              {this.state.loaded && this.galleryBuilder()}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="card-stats">
          <h3>Info</h3>
          <p>
            Distance:{" "}
            {this.props.location.state.trailData.distance < 1
              ? `${this.props.location.state.trailData.distance} mile`
              : `${this.props.location.state.trailData.distance} mile`}
          </p>
          <p>Elevation: {this.props.location.state.trailData.elevation} feet</p>
          <p>Park: {this.props.location.state.trailData.park_id} </p>
          <p>Trailhead: {this.props.location.state.trailData.trailhead_id}</p>
          <p>
            Price:{" "}
            {this.props.location.state.trailData.price === 0
              ? "Free"
              : `$${this.props.location.state.trailData.price}`}
          </p>
        </div>
      </div>
    );
  }
}

export default Card;

/*

<div className="carousel-item active">
  <img
    className="d-block w-100"
    src={this.state.gallery[0].imgURL}
    alt="trail"
  />
</div>

<div className="tooltip">
  <img className="card-icon" src={riverLogo} alt="river-logo" />
  <div className="tooltiptext">River/Stream</div>
</div>

*/
