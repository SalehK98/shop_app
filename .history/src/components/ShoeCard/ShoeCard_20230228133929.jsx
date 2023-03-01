import React from "react";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div
      style={{
        backgroundColor: color,
        width: "30%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <img src={imageURL} width="100%" />
      <p>
        <h3>{name} </h3> <p>From {brand}</p>
      </p>
      <p>
        {category} For {gender}
      </p>
      <p>{price}$</p>
    </div>
  );
}

export default ShoeCard;
