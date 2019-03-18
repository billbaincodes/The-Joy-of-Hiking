import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo"> &#123; Bill Bain Codes &#125;</div>
      <div className="nav-links">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/">About</Link>
        </div>
        <div>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
