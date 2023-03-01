import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.module.css";
import { GiRunningShoe } from "react-icons/gi";

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
          <NavLink to="/">
            The <GiRunningShoe />{" "}
            <GiRunningShoe style={{ transform: "rotate(-90deg)" }} /> Train
          </NavLink>
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
