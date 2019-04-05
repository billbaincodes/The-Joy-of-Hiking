import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = ({trailData}) => {

  return (
    <Link to={{ pathname: `/card`, state: { trailData : trailData} }}> 
      <div className="img__wrap">
        <img
          alt="hike-thumb"
          className="img__img"
          src={trailData.thumbURL}
        />
        <div className="img__description_layer">
          <p className="img__description">{trailData.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
