import React from "react";
import mtnLogo from "../../assets/iconMountain.png";

const MtnBadge = () => {
  return (
    <div className="tooltipz">
      <img className="card-icon" src={mtnLogo} alt="mountain views icon" />
      <div className="bottom">
        Mountain&nbsp;Views
        <i />
      </div>
    </div>
  );
};

export default MtnBadge;
