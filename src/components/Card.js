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
            Tell her she looks thin. Oh yeah, good luck with that. Too much
            work. Let's burn it and say we dumped it in the sewer. So I really
            am important? How I feel when I'm drunk is correct? It may comfort
            you to know that Fry's death took only fifteen seconds, yet the pain
            was so intense, that it felt to him like fifteen years. And it goes
            without saying, it caused him to empty his bowels. So I really am
            important? How I feel when I'm drunk is correct? I'm sorry, guys. I
            never meant to hurt you. Just to destroy everything you ever
            believed in. Have you ever tried just turning off the TV, sitting
            down with your children, and hitting them?
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
                src="https://lh3.googleusercontent.com/4ittYltuVHT_Dc-g_95k8j9TzF18gSCh22V7GbRRLncdvBgx5Mkfltz5UG-pzQR6H0WC9KYH1Avho_c-ro96v0580hHVy7I2_2-lT8PjQ6A4bUCiO1bw_7U5WYjOc1XpLkC124KzprGHJNb44Fdygpgx1H86Q8n95oSSsvTEIklyB68npr7BrTMM6K3ohAF_d7T9RVtNp2VsKfXd_dcS9INXQllBKNAkLKHMkOndnnDEWKqa06CEpeT6uGxUtNgTAJmVwGz_f25x6RH0X4hFOspiUIJT_ZPuwiw8Hh-q6iqsQxUgP0WrVsaR3UXevDMX50ZIBm2frcXny1PSwKrKb3wUPvI9FLi0gwkV72_BctC68SnHwZjJOztIuqoutXt40rHSQYrJJGpmWrK5OStJUy1CWaa0JvmUHrBdadXkGM0-62f7Ja0Mowh-mw61k2PcmdSAJkzXO8_-kfmck_EkJOOgd8IjCPTFuTi_JlmwbldjT1lPp5AFuFacMOBbT-vKryCuGEf_bypX9H-1TNkXxWZJAWE_jwVApMk2Ga6w-1NSDjE4UStPlArbf7MsqhHcZrUIwn_XYAPT8LMhx6s7n0s_Eg3FwtgfraoixVM27h242B_WzZo29hzwhjdcXryTTH8q93DIaKuUom65O2XtDFM515R1wuE=w1086-h1448-no"
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
        <p>Park: Arapaho National Forest</p>
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
