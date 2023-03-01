import React from "react";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div style={{ backgroundColor: color, width: "30%" }}>
      <img src={imageURL} width="100%" />
      <h1>
        {name} From {brand}
      </h1>
      <p>
        {category} For {gender}
      </p>
      <p>{price}$</p>
    </div>
  );
}

export default ShoeCard;
