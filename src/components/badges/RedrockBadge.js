import React from "react";
import redrockLogo from "../../assets/iconRedrock.png";

const RedrockBadge = () => {
  return (
    <div className="tooltipz">
      <img className="card-icon" src={redrockLogo} alt="red rock icon" />
      <div className="bottom">
        Red&nbsp;Rock
        <i />
      </div>
    </div>
  );
};

export default RedrockBadge;
