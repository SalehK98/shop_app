import React from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";

export default function LayoutWrapper() {
  return (
    <div>
      <NavBar />
      <Outlet context={} />
    </div>
  );
}
