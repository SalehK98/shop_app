import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Shoe() {
  const { shoeId } = useParams();
  const { state } = useLocation();
  const { name, price, imageURL, category, gender, brand, color } = state;

  console.log("shoe", state);
  console.log("shoeId", shoeId);
  return (
    <div style={{ backgroundColor: color , width:80%}}>
      <p>{name}</p>
      <p>{price}$</p>
      <img src={imageURL} />
      <p>{category}</p>
      <p>{gender}</p>
      <p>{brand}</p>
    </div>
  );
}
