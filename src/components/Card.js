import React, { Component } from "react";
import waterfallLogo from "../assets/01-river.png";
import flowerLogo from "../assets/04-flower.png";
import mountainLogo from "../assets/03-mountain.png";
import riverLogo from "../assets/02-sea.png";

class Card extends Component {
  render() {
    return (
      <div className="card-page">
        <div className="card">
          <div className="card-head">
            <div className="card-title">Herman Lake</div>
            <div className="tooltip-list">
            <div className="tooltipz">
              <img className="card-icon" src={flowerLogo} alt="flower icon" />
              <div className="bottom">
                Wildflowers
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
            Herman Lake is a glacial lake featuring beautiful wildflowers during
            the late spring and early summer months. The trail begins at the
            Herman Gulch trailhead, which is located about one hour west of
            downtown Denver. The trailhead is located directly off the highway
            in a paved parking lot and is accessible with any vehicle. The out
            and back hike stretches roughly 8 miles and gains nearly 2,000 feet.
            The Herman Gulch trailhead also offers access to Mount Parnassus.
          </p>
          <p>
            Mount Parnassus is a high mountain summit in the Front Range of the
            Rocky Mountains of North America. The 13,580-foot
            thirteener is located in Arapaho National Forest, 5.4 miles
            west-northwest of the Town of Silver Plume in Clear
            Creek County, Colorado, United States. Mount Parnassus sits east of
            the Continental Divide in the Front Range of the Rocky Mountains.
            The summit is located near Interstate 70. The higher Bard Peak, at
            13,647 feet, sits nearby, and the closest major town is
            Silver Plume, Colorado. It is also in close proximity to Woods
            Mountain, Mount Sniktau, Engelmann Peak, Robeson Peak, and
            Pettingell Peak. This level of variety and challenge makes Herman
            Gulch a great spot for families and peak baggers alike.
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
                  src="https://i.imgur.com/GLw8DyW.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/smOxHAJ.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://i.imgur.com/lYCxvk1.jpg"
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
          <p>Distance: 7.94 miles</p>
          <p>Elevation: 1,901 feet</p>
          <p>Park: Arapaho National Forest </p>
          <p>Trailhead: Herman Gulch</p>
          <p>Price: Free!</p>
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
