import React from "react";

import "./MenuBar.css";

const MenuBar = props => {
  return (
    <div className="nav-menu">
      <div className="options-group">
        <div className="option"> Home </div>
        <div className="option"> In Store </div>
      </div>
      <div className="option"> Cart </div>
    </div>
  );
};

export default MenuBar;
