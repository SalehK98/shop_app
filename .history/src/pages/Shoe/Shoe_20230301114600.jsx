import React from "react";
import { useParams } from "react-router-dom";

export default function Shoe() {
  const params = useParams();
  console.log("shoeId", params.shoeId);
  return <div>shoe</div>;
}
