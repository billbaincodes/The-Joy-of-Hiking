import React from "react";
import { Link } from "react-router-dom";

const RMNPThumbnail = () => {

  return (
    <Link to="RMNPcard">
      <div className="img__wrap">
        <img
          alt="hike-thumb"
          className="img__img"
          src="https://i.imgur.com/mDQK9Lr.jpg"
        />
        <div className="img__description_layer">
          <p className="img__description">Alberta Falls</p>
        </div>
      </div>
    </Link>
  );
};

export default RMNPThumbnail;
