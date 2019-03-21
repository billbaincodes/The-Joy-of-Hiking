import React, { Component } from "react";
import Rellax from "rellax";
import Parallax from "parallax-js";

class Parallax3 extends Component {
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
              className="hero"
              src="https://lh3.googleusercontent.com/plJCooJyKE6fydpyfo6DhBmBsCZrShtEghcaXZBjQHWJXUSICM2UZbUmdSBsV6UTdkPXpQrWxFGhpVOxJZpV0VCRwq-B43vK2ZEXx-TyinFWmf5BcEGG0-JLqnUEJKs7VFY_OuTWQFy8iFKtvfqBUGdmjHno20iF--mHhwImmIhyqJcbpaHLqy2nh9qyxQhWDnnvTV-1i7fJCRFHQvsz-JWd7EIKRQKQJK81SLNa8a7mHP2zTkRjpG6WryKg82dOxUpjg-LyQ3-hxXCHQLyk12pqGfN5w39nZ3l7XHl3D0BuGf5Af3LEI7AstznJu6sWtaR9XxNcLIcr20OaiWVwRMhwtUvJBBEjYBlOrTJWURrxHjb_u6dncFO2Wr7chNiFaXH103vXBJ4PjR4R5eKeQTNtnFc5qLxc6E5G5IHyILQoogVrff5zL1dpuIV_CgK2KoWr4GS5DjskgUy8e49baI_ddmG6zbOFhXhDqUQkwcMUncR4mjj9Tfvfw30V9QX2AeT7--33HuxdXCd6KhD9jb9DUoEqMubzjT__OxwWdHfD9xMFQtyUA-l9Rf7X1Sev6-LT_P2Q5vtiBfE2tVG9bxyIBpc1C0HiadqA7mrym-Iibn6S9KR57ir69_4B3S1vMbXFZC5ydeJxn9kI864hQk4oh5GjJOI=w1500-h1000-no"
              alt="node"
            />
          </div>
          <div data-depth="0.2">
            <img
              className="hero"
              src="https://lh3.googleusercontent.com/tNXYyimiqt1KXlr5dfhpCSaZTseaQIff5A1bIv42zs6KZe-ulhRFi48Tz7-x8JoMz-7H_e_bUkeC6esUsjS8hFGMGqc-EDONl-EJ1LWAnrQTdx323CpPNt-ywCaGNCcEqUXc2waGEZbt-4mhIVE-S8CLDOq0Hxbo7SwjXkoSkkHqqunAHYEZEqF5s0Z-RAvTIWvzhzQn3SYTmIOgAgYbMD5o9PjerKZZJnDnZw8UrCYufOpZWX6UvLtbEMGPm-qZSuLNV6BadQEfqX4xJ6fRrXzNSDsP8G3UCXv4VwTRwBkVUi7rFwcU6w_SdfRuWgjcjUpF2S5Jcmo-qx3tHeBb_0k2kUtN807b4AOrjgSfHa1pBruw4hKVdJ25Pbl6bgC47hLRmNnXFOD2Lnc-un5kT1RPsWIiHWqNBnR1PBqmNmoMrlA4kJYjpekLfr1vGidMFJVBwf7Sw5BY_ieMNy936ZbqmqsvBofFwPoawmLbxNoBCnZwNGv1dTHSMPVzgUX9LWepUPYbkRlJh8gfLcQtI6lLOLyETH_6cgTYCt6hyJYGXFeIpiWLj4j6b-1YzT21p2XGKc3xg6cHZfzfe3w_-w5JajrVmWH_KK17xzZzFY8iPM9EXk07BEwuQ1Vyz7BOYmUYcv5c7_ZBmW_aGI1nUlcJzfAlFNg=w1500-h1000-no"
              alt="node"
            />
          </div>
          <div data-depth="0.4">
            <img
            className="hero"
              src="https://lh3.googleusercontent.com/1mfRB7yN_h-wj5kD1SN9DDHR3ZFLEYTBmFdf1K0otx55iHVHrV4xIbZckVz5w7lRrlT5_BUV1IHsJ0SlFII_4oYfL_Pc1tmx7XiDFr8JUMi0vxUGgjbk79tuF_DqQozXtFcPdi6ZlxViL6SnF3rGrcjyZiaTmP359tXucZhfOzGJ4j__ZPp-ozj1-FwM_LL0Oz_viQgYfk58GIO7nrj3wvVKJhMOkiyjuBgffLgXYMDBi8inEDPSfefdWparfJeG6FtW_gAeDXFAJU5UQ_1v71PWOthDjT_tW2gDkgesaCxcOpzLb-Th067KvngduQjft9oryCSYNKKdoU5aXz21AXBkJt_Nv_ol1mpgg4MwnlEQrIkE2xuQZJMQffdvDYFPOS49ReO_iDAkdF-H0yk7_k2-bzc6eedpo824inYaGs37CaI7PEJDfDc60BPe67fvmE_57a4pis4blXFssvpCAy1zgtZUbnrHRw8ZkSkIq2R6BbzBDzo5wxfr3Oi5prL8oWgmBTO_3qdBxMdZAG5MBPtTnorGPF0OleBkjaBlYr_VLCx-mLSsHbqsskCYHQzyqHPddJZ2Oj8G5-gJpXcElancuCwUDmSHm0MSXWNsFS_YpjyH0Sn6mD6kk2ZszTvgFQ1Y3yYSwLTWKYuNoFSefJT6IpCLfTQ=w1500-h1000-no"
              alt="node"
            />
          </div>
          <h1 className="mist-title" data-depth="0.9">
            Butterscotch Rose Photography
          </h1>
        </div>
      </div>
    );
  }
}

export default Parallax3;
