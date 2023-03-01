import React from "react";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div style={{ backgroundColor: color, width: "30%" }}>
      <img src={imageURL} width="100%" />
      <p>
        <h1>{name} </h1> <p>From {brand}</p>
      </p>
      <p>
        {category} For {gender}
      </p>
      <p>{price}$</p>
    </div>
  );
}

export default ShoeCard;
