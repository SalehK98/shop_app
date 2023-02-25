import React from "react";
import { Outlet } from "react-router";

export default function LayoutWrapper() {
  return (
    <div>
      LayoutWrapper
      <Outlet />
    </div>
  );
}
