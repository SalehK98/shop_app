import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  let activeStyle = {
    textDecoration: "underline",
    color: "skyblue",
  };
  return (
    <nav>
      <ul>
        <li>
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          <NavLink to="/shoes">Shoes</NavLink>
        </li>
      </ul>
    </nav>
  );
}
