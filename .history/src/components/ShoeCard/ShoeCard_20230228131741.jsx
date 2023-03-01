import React from "react";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div style={{ backgroundColor: color }}>
      <img src={imageURL} />
      <h1>{name}</h1>
      <p>{price}</p>
      <P>{gender}</P>
      <P>{brand}</P>
      <P>{category}</P>
    </div>
  );
}

export default ShoeCard;
