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
          <div>
            <div className="card-title">Herman Lake</div>
            <p>
              Herman Lake is a glacial lake featuring beaitful wildflowers
              during the late spring and early summer months. The trail begins
              at the Herman Gulch trailhead, which is located about one hour
              west of downtown Denver. The trailhead is located directly off the
              highway in a paved parking lot and is accessible with any vehicle.
              The out and back hike stretches roughly 8 miles and gains nearly
              2,000 feet. The Herman Gulch trailhead also offers access to Mount Parnassus.
              </p>
              <p>
              Mount Parnassus is a high mountain summit in the Front
              Range of the Rocky Mountains of North America. The 13,580-foot
              (4,139 m) thirteener is located in Arapaho National Forest, 5.4
              miles (8.7 km) west-northwest (bearing 288°) of the Town of Silver
              Plume in Clear Creek County, Colorado, United States. Mount
              Parnassus sits east of the Continental Divide in the Front Range
              of the Rocky Mountains. The summit is located near Interstate
              70. The higher Bard Peak, at 13,647 feet (4,160 m), sits
              nearby, and the closest major town is Silver Plume,
              Colorado. It is also in close proximity to Woods Mountain,
              Mount Sniktau, Engelmann Peak, Robeson Peak, and Pettingell
              Peak. This level of variety and challenge makes Herman Gulch a great spot for families and peak baggers alike.
            </p>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="https://lh3.googleusercontent.com/J-Tzo9iLdGM84a4y9a9Bh3QiWIuPcwdV9mmK6e5kXeo9C1zniywd0uoEqNSHfh8REfQE98VqGbiFTO1ymymrDMSuLqbqXkF1uXIXd8N_un4WHm3n7xxpmLS8oqFhp5LNVVmFVpzcyusRfmxc5ByufCc18Wk5j8B0Ohfl9teAvoqEnAqn1eBbWodOMpuJbaWA-puOzpd7BAWAg_lSHm5BFAuQX8b1hE_7omN0CNuaQBKmUwGwMCA6h85hOG0OVcQofBGDcNUX8qMGEdzU6i9u2kRGA8yDFonxpauCw0fsb4qVMTgVqsF4iWu7KtvX6NHsFaLlZI0QCOnAphmTAyyZUnKZvshdf5h2f9kgyGA-tGWuYFgtWi2WIj3vAdEN2CK1MQhAY9cu7lAdHDP3j6QPQbDIXEpNlxE6Wgavl48HN8HIPm1h6AIjC1nXOb8BgIyB5xLvmsm3f5KoA-ERSbfFots2tg7QPoQDviCLtJxpNzg8g3xC0plo_wsk208_LhsU0eLwWN9pcVhglkrX2LnxkYXKSbe5LgfLrjmfU1NDqbftkN2edhAXkndi7x6mQQdmIxz7jTKK3My34iCq-lWevAc25eKOcqnVkMUE3ZB51CJd_mLjoayoF8kMgaEsCC109rETi8Ep3Jkc-J9BircdetZyPUrsYIM=w1932-h1448-no"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://lh3.googleusercontent.com/xAkKaLculpsGykgboKMZvcEDnRjOkbRtQXSVb6R551AQle9uIgRB8GyMpcE2o4QRGTnq1qqggVg4jYnDraC_ZmRnZxdWNHD9RrjzxOGTAxPFc0R3Ss0YImUioq5DoBc8X6P4__Rex_Je9b6pEMjXZ15pkK1um09HHrhWtTx5prA0ypdb258s-DuGuVvbjuWmZVUux5rnwliDiNObBfa1RjKDucT5JworgYoM-OF3YW2ltDm5ty7CQg4_lJ7PsbnZ8n72AXf8zJUBl8yLreapeRzOvLP7qzVdMe6IpSPZdc-e1roc6_OHkwP615aGufj11ih2SlnioVWR-zkJ-ueaUjsrdKkTHGwVVoISk9ECX_TqKtZ-EsxqjonnUD1TS7rJZWDLkav2h2fUQKhkL40r5v9_QAKZMYJYho9SPTjKhPC-7a5UsQyHNK7gsQF2iExTGdWMcnasF5u6eIRzDAq27tMIT5QbqRweUape30l2lbTTaQ1pHWcJIkInYQruk5U_xl2WrDI4s6L9_DvQxwIEONwQLsxTDgvdWl6G7NzVJyf6hGuvVg6fGKADfpO7jvbt4vpN4UAhg6PkBTo9WXw-25SFyX-H6MGLVLycT89OnpMU673cGy2UELR0stpjCEsueuSZ5E4lB8uj5476AWJZB5slPdznTdw=w1932-h1448-no"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="https://lh3.googleusercontent.com/9kt9gB_H_XP8U48HF0Ohk14pZ38RKS5EG4RwTNE5Nyaq1xJwZKJh2gQtyuyjsOCW6HQaK02-Tcp4xHgMxzvibCFU9cEEq-hliOUnEDbobjNC4WKl85_7sAQ9YQbUNxozsSoZXKk-1v_4q0QbLj8z1zpmAZg2YYS7LLU6Q2Jt8COYpdcB9TrYA-ci1bpekuLoXmvd83FKGi9p_rcIOpxLb7UYh2oD9Y7cP_7CdDYjLvbZgADrQ0OnG2M3ZWN88RqKrqz3vmQ767I2Q2Be414WYkbqXPflOTO7-kI3_n9LadBFnYMe7sSjZ2P5GtYpfCDQXSjO400SgazXl-yijjU8EIoXjR6GEZF-CO1C8UHj2TB5CGqtLKFkSvOMmxafQLHgP6Rw-fZiwzFCVRAcBuhVeUYyqFU4uw_FpyYo5DcgBuwmqWyD8ROD6H68eOdqP_XfOKXZblsleENTcN-rVXBzWZkefGg_YDUYoX4_aQNg4vXFQOSrHs3nszdEFTYwHItx94ohLbkaGF50SQlRLvjlZfAIMWm_NNt1DtlgAVHpK7jK4Z0hSBHRjdcF6g9ZLYYO6oyBPxkYpHZZ-dxqV3sc63MDG-hXlHdgau0Dlm8jzqBGpgYvRUx1hWbEzNBUKfeotJbPNWoa22xglcnSDZIcPhxjID9EDLA=w1932-h1448-no"
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
