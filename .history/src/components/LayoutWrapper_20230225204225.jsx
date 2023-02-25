import React from "react";
import { Outlet } from "react-router";

export default function LayoutWrapper() {
  return (
    <div>
      {(window.location = "/home")}
      LayoutWrapper
      <Outlet />
    </div>
  );
}
