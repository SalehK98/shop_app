import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Shoe() {
  const params = useParams();
  // const shoe = useLocation();
  const { state } = useLocation();

  console.log("shoe", state);
  console.log("shoeId", params.shoeId);
  return <div>shoe</div>;
}
