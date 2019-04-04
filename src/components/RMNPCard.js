import React, { Component } from "react";
import waterfallLogo from "../assets/01-river.png";
import flowerLogo from "../assets/04-flower.png";
import mountainLogo from "../assets/03-mountain.png";
import riverLogo from "../assets/02-sea.png";

class RMNPCard extends Component {
  render() {
    return (
      <div className="card-page">
        <div className="card">
          <div className="card-head">
            <div className="card-title">Alberta Falls</div>
            <div className="tooltip-list">
              <div className="tooltipz">
                <img
                  className="card-icon"
                  src={waterfallLogo}
                  alt="waterfall icon"
                />
                <div className="bottom">
                  Waterfall
                  <i />
                </div>
              </div>
              <div className="tooltipz">
                <img className="card-icon" src={mountainLogo} alt="mtn icon" />
                <div className="bottom">
                  Mountain&nbsp;Views
                  <i />
                </div>
              </div>
              <div className="tooltipz">
                <img className="card-icon" src={riverLogo} alt="river icon" />
                <div className="bottom">
                  River&nbsp;/&nbsp;Creek
                  <i />
                </div>
              </div>
            </div>
          </div>
          <p>
            One of the busiest spots in one of Colorado's most crowded parks
            makes this trail an easy skip for those seeking isolation. For
            everyone else, the breathtaking views, dramatic landscapes and
            unique features make this trail worth braving the crowds. The trail
            starts at Bear Lake, an easy and short walk that is highly recommended, before following a 
            river through mountain ravines and ultimately arriving at Alberta Falls, the crown jewel of the hike.
          </p>
          <p>
            Rocky Mountain National Park is an American national park located
            approximately 76 mi northwest of Denver International
            Airport in north-central Colorado, within the Front Range of the
            Rocky Mountains. The park is situated between the towns of Estes
            Park to the east and Grand Lake to the west. The eastern and
            westerns slopes of the Continental Divide run directly through the
            center of the park with the headwaters of the Colorado River located
            in the park's northwestern region. The main features of the park
            include mountains, alpine lakes and a wide variety of wildlife
            within various climates and environments, from wooded forests to
            mountain tundra.
          </p>

          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/qEmWNWY.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/7lpQYKk.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/DEsJamW.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="card-stats">
          <h3>Info</h3>
          <p>Distance: 2.11 miles</p>
          <p>Elevation Gain: 428 feet</p>
          <p>Park: Rocky Mountain National Park </p>
          <p>Trailhead: Bear Lake</p>
          <p>Price: $35 for one car (2018)</p>
        </div>
      </div>
    );
  }
}

export default RMNPCard;
