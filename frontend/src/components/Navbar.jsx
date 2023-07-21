import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navContainer">
        <NavLink to="/" className="navTitleLink">
          <h1 className="navTitle">EVENT CREATOR</h1>
        </NavLink>
        <div className="oblicShape" />
        <div className="imageBackground" />
      </div>
    </div>
  );
}

export default Navbar;
