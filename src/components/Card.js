import React, { Component } from "react";
import FlowerBadge from "../components/badges/FlowerBadge.js";
import MtnBadge from "../components/badges/MtnBadge.js";
import RiverBadge from "../components/badges/RiverBadge.js";
import WaterfallBadge from "../components/badges/WaterfallBadge.js";

class Card extends Component {
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
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/GLw8DyW.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/smOxHAJ.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="https://i.imgur.com/lYCxvk1.jpg"
                  alt="Third slide"
                />
              </div>
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
          <p>Distance: {this.props.location.state.trailData.distance} miles</p>
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

<div className="tooltip">
  <img className="card-icon" src={riverLogo} alt="river-logo" />
  <div className="tooltiptext">River/Stream</div>
</div>

*/
