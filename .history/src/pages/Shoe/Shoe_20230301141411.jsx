import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function Shoe() {
  const { shoeId } = useParams();
  const { state } = useLocation();
  const { name, price, imageURL, category, gender, brand, color } = state;

  console.log("shoe", state);
  console.log("shoeId", shoeId);
  return (
    <div
      style={{
        backgroundColor: color,
        margin: "auto",
        height: "90vh",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          backgroundColor: "f6f6f6",
          height: "95%",
        }}
      >
        <p>{name}</p>
        <p>{price}$</p>
        <img src={imageURL} style={{ height: "400px" }} />
        <p>{category}</p>
        <p>{gender}</p>
        <p>{brand}</p>
      </div>
    </div>
  );
}
