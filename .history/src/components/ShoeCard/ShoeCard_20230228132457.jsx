import React from "react";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div style={{ backgroundColor: color, width: "30%" }}>
      <img src={imageURL} width="30%" />
      <h1>{name}</h1>
      <p>{price}</p>
      <p>{gender}</p>
      <p>{brand}</p>
      <p>{category}</p>
    </div>
  );
}

export default ShoeCard;
