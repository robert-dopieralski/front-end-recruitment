import React from "react";

import { Link } from "react-router-dom";

import "./MenuBar.css";

const MenuBar = props => {
  return (
    <div className="nav-menu">
      <div className="options-group">
        <div className="option">
          <Link to="/">Home</Link>
        </div>
        <div className="option">
          <Link to="/store">Store</Link>
        </div>
      </div>
      <div className="option">
        <Link to="">Cart</Link>
      </div>
    </div>
  );
};

export default MenuBar;
