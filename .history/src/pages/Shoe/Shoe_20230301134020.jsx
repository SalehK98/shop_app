import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Shoe() {
  const { shoeId } = useParams();
  const shoe = useLocation();
  // const { state } = useLocation();

  console.log("shoe", shoe);
  console.log("shoeId", shoeId);
  return <div>shoe</div>;
}
