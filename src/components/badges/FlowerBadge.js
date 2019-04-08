import React from "react";
import flowerLogo from "../../assets/iconFlower.png"

const FlowerBadge = () => {
  return (
    <div className="tooltipz">
      <img className="card-icon" src={flowerLogo} alt="flower icon" />
      <div className="bottom">
        Wildflowers
        <i />
      </div>
    </div>
  );
};

export default FlowerBadge;
