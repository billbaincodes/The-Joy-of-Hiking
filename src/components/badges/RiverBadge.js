import React from "react";
import riverLogo from "../../assets/iconRiver.png";

const RiverBadge = () => {
  return (
    <div className="tooltipz">
      <img className="card-icon" src={riverLogo} alt="river icon" />
      <div className="bottom">
        River&nbsp;/&nbsp;Creek
        <i />
      </div>
    </div>
  );
};

export default RiverBadge;
