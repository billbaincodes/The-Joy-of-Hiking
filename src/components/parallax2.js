import React, { Component } from "react";
import Rellax from "rellax";
import Parallax from "parallax-js";

class Parallax2 extends Component {
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
      <div>
        <div id="scene">
          <div data-depth="0.1">
            <img
              src="https://lh3.googleusercontent.com/YvVlJaYN-hlftsqLgn7QXIBbnBwGnr89MkaU8KZtJHAFxAWr4-9tIJKr_KWouN7SL4efxGYoNUh2A0JpGigNkEGu-ZkOpXVg-g8KLiTiSPTbGU030CZJMQTb_hT7pVX4vMe0IUnS4sNID-lFUXufkqQqyXV1wbXI-pEVQXgtIW-oHApOkiXwkciWYgyowtIh5GajPtTpbOYFpHk9VI1ydLC9DEvW3ugMLchCa6zsQgR8A84CVPgY-fRrpoJoHbryvvGzLqmh4XCt9steQ5a5yP-7NcgtOkpnnIuI9McBk5awLzwxFML6_fpCcRKtOLqh9NWELljeMwlfHknKGOK_0TW2xazzdn0rCVGo8_8IBS8DndfgxkvwHRASRVqK3g1NJ9SB6Tmh429-Jae7_tId6orTXb5UJTBI9794xLOsDt8MjLfuBLbN9reDX4YcTyz8mXK6Q2_ZP_sIXPhMiFHVxdU01hOvVcRsw7btnIWAitQdFmSSQrEIGAPrszKut358CP40D35mAArDsJT1LJSuuyUAsu65pDYEAQzYdyh3uWKZqRNwHJuxLjr_J26msRKrwF9rSRsbW0CoS39CewJfxntaIgsLaCN6HUkH0H7UVIfzB4BjpWB0d2w3jpArXFWXEvlM4-sP1Jli_3Gpj_Nywm9SlzkEqIw=w757-h1248-no"
              alt="node"
            />
          </div>
          <div data-depth="0.2">
            <img
              src="https://lh3.googleusercontent.com/PvTPerZJh6XS7wIQzk2_DC0nAVQ88r0clxh1kp11eOz0Rt_JvIvUsyjZtyM_Rwopz-u1kZZeVv73gBCiGCXnRXHBbfsjCa1r0_gRW5iVpv1usRj9jMnOZcuCrvpMpxX3WKn8aCiDBtEUeby2hhQsiDVwU860cOY-NfA4k2vvBjYlxdUvcw9owIGh2OidPkAEdk9NM6DNLkGDnilgWP3opc2_1QDrp4FeRq4Rf7XjGPncaEjkmwuJcCZ8qI_vMZNrvSbo4b3ZEnXqEYLVKmH0LZ9gfcD-1Mg3AtD2FExpBIkEUHVkf7PLy07ZJmPaRE4I_tIpnLWYFzUVOUHkhXVF7Iru5v4I3-qnupCsHiVUngP4nL4BCxxDpVEDLB7wgVNTowYKtLD0-F9XAusN6rnYMQBNp7-wL5pjiZSSrkPKK23WvNKy492ywUZIlkQLK_fOMPcdwrir2wmMrKSqTW17VCJaeTMSvw43FaON08H2hCvDWMLyRT82P_hb0GUOiQ9PNelf1WlnY4rzLZUOp-gn7TnTerRgBcVRW3EW9imWgxJNGqS3YLkq8UrdJOb-Nj06rF9byCiHi0FXphM_tWEBsRhbdmAco343JwZJ0horpBvdr-hoEGpSfdONBtd3p806S46UE5I-T_l9-ixCkv_Sx2ZBr-NoaYk=w757-h1248-no"
              alt="node"
            />
          </div>

          <div data-depth="0.4">
            <img
              src="https://lh3.googleusercontent.com/O3LMbxhByRu9WCLJtnFOzu0GRmQjHAyn3X63f6h21PN8s5cLfmcj9CUj_xLk8KRntzAa8JekUdTFyeRaQ7xpo8pTBYIdcBI5pD98EUufqBcDX4a9sM1sPItDWuHyVPY4WBKIet2e9WwZ2xO4R74p4_ND9ZqXnZE3hVkTfY7w86ebNt_0GJQAgIw2J8LZ-Hpt2fd2pgyyoiQPLJjDnK4z7r4htwMFRBPd_v9A4OCotS3PreLRg6r3uCTtlaSeNgLY5xC6ZSxGdULvskVupvsWD46X7TWDQr5QxHuzz_8obYC9NQiuIZSUPRER6nsKS4wTaRjAh_2NBJ_YQ_3uLy5XhV1FFNm15WQsJEZv-Eo9vADBIvNqxtwtn1qmOY-w8v_-tsNt6ZeQcChxvc8AShaB3rTcB3NmeW0gylgNdwvIqrjYHmf4etOOsN0Z24YAE6x2xl66wx8feOO2KUsCv83yTL8XUh45hXMk5ol3V62f3vU8TCsXlW3hWzldVGgoc6UNoyOjb6jvgHK9ygXzeEaw8BAxp_atsCJ05_yCou4bSSGZJxC20HsPLg0DQV0yJvVjZ-o6npuoXYDJ9E_tuuAdM_FrtO7qWAFpJj0TWkbHRnbgR975wa6AqVG4ZJPI7u6TatWBbHJkbnXF_UeOSVTk2Fo3J_o8X1Y=w757-h1248-no"
              alt="node"
            />
          </div>
          <h1 className="lax-title" data-depth="0.9">
            Butterscotch Rose Photography
          </h1>
        </div>
      </div>
    );
  }
}

export default Parallax2;
