import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = () => {

  return (
    <Link to="card">
      <div className="img__wrap">
        <img
          alt="hike-thumb"
          className="img__img"
          src="https://i.imgur.com/R7IT2MD.jpg"
        />
        <div className="img__description_layer">
          <p className="img__description">Herman Lake</p>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
