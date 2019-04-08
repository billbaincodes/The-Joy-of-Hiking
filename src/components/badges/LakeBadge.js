import React from "react";
import lakeLogo from "../../assets/iconLake.png";

const LakeBadge = () => {
  return (
    <div className="tooltipz">
      <img className="card-icon" src={lakeLogo} alt="lake icon" />
      <div className="bottom">
        Lake&nbsp;/&nbsp;Pond
        <i />
      </div>
    </div>
  );
};

export default LakeBadge;
