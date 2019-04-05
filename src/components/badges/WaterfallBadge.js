import React from "react";
import waterfallLogo from "../../assets/01-river.png";

const WaterfallBadge = () => {
  return (
    <div className="tooltipz">
      <img className="card-icon" src={waterfallLogo} alt="waterfall icon" />
      <div className="bottom">
        Waterfall
        <i />
      </div>
    </div>
  );
};

export default WaterfallBadge;