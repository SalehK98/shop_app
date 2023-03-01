import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.module.css";

export default function NavBar() {
  let activeStyle = {
    color: "black",
    backgroundColor: "coral",
    border: "transparent",
    borderRadius: "5px",
  };
  return (
    <nav>
      <ul>
        <li>
          <h1>The Shoe Shoe Train</h1>
        </li>
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
