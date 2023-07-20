import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="navContainer">
        <NavLink to="/">
          <h1 className="navTitle">ÉVÈNEMENTS</h1>
        </NavLink>
        <div className="oblicShape" />
        <div className="imageBackground" />
      </div>
    </div>
  );
}

export default Navbar;
