import React, { Component } from "react";
import waterfallLogo from "../assets/01-river.png";
import flowerLogo from "../assets/04-flower.png";
import mountainLogo from "../assets/03-mountain.png";
import riverLogo from "../assets/02-sea.png";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title">Herman Gulch</div>

          <div className="tooltip">
            <img className="card-icon" src={riverLogo} alt="river-logo" />
            <div className="tooltiptext">River/Stream</div>
          </div>

          <div className="tooltip">
            <img className="card-icon" src={waterfallLogo} alt="river-logo" />
            <div className="tooltiptext">Waterfall</div>
          </div>

          <div className="tooltip">
            <img className="card-icon" src={mountainLogo} alt="river-logo" />
            <div className="tooltiptext">Mountain Views</div>
          </div>

          <div className="tooltip">
            <img className="card-icon" src={flowerLogo} alt="river-logo" />
            <div className="tooltiptext">Wildflowers</div>
          </div>

          <div>
            <span className="badge">Distance:</span> Expert!
            <span className="badge">Elevation:</span> Expert!
          </div>
          <div>
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
          </div>
        </div>
        <div className="card-body">
          <img
            alt="herman-lake"
            src="https://lh3.googleusercontent.com/gAJF-qBxbYYbpgRsw7WbQ_-nmbxWXMAJZCpJqUqVBNAqdS9LvFp2blXE-i0led09dJks_vlODNd2K2LKEI-gEpocMk82xKJHuosBAZcgKtf0TfV2xz6bGWrse7oPgUnk5nTw9_qIStotoNUvfRjia8OeVdwJOTkYzkcYy8rxxUNvFZvrj4bg97Kg8grIu_MtX7eNFRBITkw5Eeyds7NqGLob5R5H2WTVgcmPF6CtSo_WqE18K_dHhwEOYIJnTjNsM8XeTa_EkEgL8HBfdWLDsbhwkJS-dmwVHIh-V7DW3t1kXOjRRVAQ1k8J7QNvm0-mV1mGLhIt8dUTqYntOZnv-FedfnHUUZDzgWEAc9lNJ2tdz1x7NjKqVbCkIdyB_L70M790eDoKcvjEK7wEgr0cW617C1hcFAUYDIeNgkGECV2gWlJMQjMWV4gu71aZL5NiXRgE5pCyWQhDVuXwo5F7Goe9bffQrsb1YetPEW42hCpA-4TnpP5cb51kEwPLKjuq-9CDJaM-gaoRo1fK-Sg2vYlfkuJga8iyWc273dJ_5BPVP-zYfo9WQcO1pzQDFi26Qal8qpnMQIsnjdf0YSOoXuIw38TViZE2BKEqkbVU8r2EJjDoppJTdPQgCHBayJ82uf2dQDvTwNr02LIc_ARpjeeM7RwUVtH3PxYoWSrVzCKv4Fsoq5We1AKNZkXpinQJDzIS8Il44rPrAqiDn0-lI3B3=w2322-h1452-no"
          />
        </div>
      </div>
    );
  }
}

export default Card;
