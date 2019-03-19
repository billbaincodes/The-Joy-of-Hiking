import React, { Component } from "react";
import Rellax from "rellax";
import Parallax from "parallax-js";

import bootstrapLogo from "../assets/Bootstrap-Logo.png";
import gitLogo from "../assets/Git-Logo.png";
import herokuLogo from "../assets/Heroku-Logo.png";
import jsLogo from "../assets/JavaScript-Logo.jpg";
import knexLogo from "../assets/KnexJS-Logo.png";
import nodeLogo from "../assets/NodeJS-Logo.png";
import pgLogo from "../assets/PostgreSQL-Logo.png";
import reactLogo from "../assets/React-Logo.png";
import restLogo from "../assets/RestAPI-Logo.png";
import htmlLogo from "../assets/HTML5-Logo.png";
import cssLogo from "../assets/CSS3-Logo.png";

class Tech extends Component {
  componentDidMount() {
    //Rellax code
    // new Rellax(".rellax");
    // var req = require.context("../assets", false, /.*\.png$/);
    // req.keys().forEach(function(key) {
    //   req(key);
    // });

    //Parllax code
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  }

  render() {
    return (
      <div className="tech-page">
        <div id="scene">
          <div className="lax-title" data-depth="0.4">
            <h1>Butterscotch Rose Photography</h1>
          </div>
          <div data-depth="0.2">
            <img src="https://lh3.googleusercontent.com/-iJA2_Z2tEDwXfOorhrkzL52vczcga0FGWMuD1RieQPmhydJ5MgwGzwY6pyTsJe6Rk_U3zkTjuxXwhv-VlVW5kaAAiznbDqhaLG5UEnTcfeqhOVGJWAHZMZUIgjyEXQ_kDmBItp53deurqnFhOrsyqMFQxUfxgnI_3SiQsaMiQYLqdLggsir9qyho5JBUDPg-cfIGtNcoNbO_OqpXLMCt1gLC0q3R9zYM4L71VI4A0Jlj1GL-lh8EMk6H3GgyGofO8d0EcfWkubX548_zOFQjhwYbaN-HLki6D4sd95DUGO0gflbnEZ37vWzF2UU5cyo8O2O6yGO-3YGg6QlP7CGC__WpvWYHYjPFkgf6fJxEMJOMthjNjWIpxnhPxxY4AGmn9HY5YU6DNQqTSXm5ccKZgljcESsjhwuOca_eFLWFmKwwAg8CguCjke3aSspzuXlyyYZOtD99GKDsc5z3J6Zfs3ZUbhM3h3z2-pyR8tL0TdZC9eWd_yZFXyTYDUDfxVGBpDhtXAqNjROLxftC28CpEJBN5fEKNLegw8PeX6p5i1VVms3M-6YZVMzB7z8qSBFU1x7F1o_S7H6l5niXXT-ACJOlf476aZufkQdzU0NyZsFS9mXZlG2P2mANsj9dgZWZdz-Xj6iTprOYT1iemR_8-hILPUev3A=w1000-h442-no" alt="node" />
          </div>
          <div data-depth="0.8">
            <img src="https://lh3.googleusercontent.com/KJAtsxIjsrUlZ57Ml2uRMW2QtHCs0Qm-Gb33OZ2PhrjNVbNy16afHckFJO6PumNo_XcwSdRwGEFtLT-UEUTkMWy8x7pFY4miVg7eqzPYkTqjCtf85efGVCgc3M_7-ZNxiruXkTXfRYpnuWxj4z7I6-MLUXwoHZH4RlG6M7cPcR48aF7m8yTDr8LaUHUv6CnxO-frqYaXxHHsPJ_FHMNItZyezkHKTh_SjcmrzsDKQvIuCLVl35A5j0uQFs3JU-gjG7ggPVv_MCqPV_o2as1r46jN_0MH3MeTZETgW4BaYfcjhharHtNom1dup26R_YsSMOMDR-KVw5q0NEGDM_5VSKNocCfX8J45D63HM0OBom4ZaCNqiilECSAA3sbK0qq6B3YuNxbr3xhY4Y448vA9f6UDrFqEBmiZQ7gqCbyQR-M3BKkhMf9fJweBggIOg9KpHauZgb7jkeiGwJ1LkT-GWS1TPctUnKowzCL7lrY2wllbKZeCca-Fjp4x8Vm8_NZjuzkiz02IA4POX0BqXJwhd6hbv-KTM6NcIziXrNOu7GWBgBkLtyapRCeohjBpF095-ScW1xVXkegCH4BjH1oKeBqTZuAwfGStLuL_hyhaaIcFzK2XsqmYYvSVQGv6Bih8T4g0QAnXesvf1IlZk8V6idB98pEpfdY=w1000-h442-no" alt="node" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tech;
