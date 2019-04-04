import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Rellax from "rellax";
import Parallax from "parallax-js";
import lax1 from '../assets/mtnlax-1.jpg'
import lax2 from '../assets/mtnlax-2.png'
import lax3 from '../assets/mtnlax-3.png'



class Parallax3 extends Component {
  componentDidMount() {
    //Parllax code
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene, {
      limitX: 0
    });
  }

  render() {
    return (
      <div className="landing-page">
      <div className="parallax4">
        <div id="scene">
        <div className="parallax-top">
            <img
              className="hero"
              src={lax1}
              alt="node"
              data-limit-x="1"
            />
          </div>
          <div data-depth="0.9">
            <img
              className="hero"
              src={lax2}
              alt="node"
              data-limit-x="1"
            />
          </div>
          <div data-depth="0.7">
            <img
            className="hero"
              src={lax3}
              alt="node"
            />
          </div>

        </div>
        
      </div>
      <Link to="home" ><div className="splash-link" data-depth="0.6">
            The Joy of Hiking
          </div>
          </Link>

      </div>
    );
  }
}

export default Parallax3;
