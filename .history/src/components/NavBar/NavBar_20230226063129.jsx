import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.module.css";
import classes from "./NavBar.module.css";

export default function NavBar() {
  let activeStyle = classes.activeStyle;
  console.log(activeStyle);
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shoes"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shoes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
