import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">The Joy of Hiking</div>
      <div className="nav-links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
        <input type="text" />
      </div>
    </div>
  );
};

export default Nav;
