import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Shoe() {
  const params = useParams();
  // const shoe = useLocation();
  // console.log("shoe", shoe);
  console.log("shoeId", params.shoeId);
  return <div>shoe</div>;
}
