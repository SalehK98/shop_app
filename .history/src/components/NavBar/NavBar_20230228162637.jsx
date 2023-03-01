import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.module.css";
import { GiRunningShoe, FaBeer } from "react-icons/fa";

export default function NavBar() {
  let activeStyle = {
    color: "black",
    backgroundColor: "coral",
    border: "transparent",
    borderRadius: "5px",
  };
  return (
    <nav>
      <ul style={{ textAlign: "center" }}>
        <li>
          The <GiRunningShoe /> <GiRunningShoe /> Train
          <FaBeer />
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
