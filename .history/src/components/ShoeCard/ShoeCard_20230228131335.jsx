import React from "react";

function ShoeCard({ el }) {
  console.log(el);
  const { name, price, imageURL, category, gender, brand, color } = el;
  return (
    <div>
      <img />
      <h1>name</h1>
      <p>price</p>
    </div>
  );
}

export default ShoeCard;
