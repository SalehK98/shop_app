import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.module.css";

export default function NavBar() {
  let activeStyle = {
    textDecoration: "underline",
    color: "black",
    backgroundColor: "coral",
  };
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
