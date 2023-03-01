import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Shoe() {
  const { shoeId } = useParams();
  const { state } = useLocation();
  // const { state } = useLocation();

  console.log("shoe", state);
  console.log("shoeId", shoeId);
  return <div></div>;
}
