import React from "react";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div style={{ backgroundColor: color, width: "20vw" }}>
      <img src={imageURL} width="500px" />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{gender}</p>
      <p>{brand}</p>
      <p>{category}</p>
    </div>
  );
}

export default ShoeCard;
