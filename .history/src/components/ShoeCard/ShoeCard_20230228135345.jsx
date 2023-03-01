import React from "react";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div
      style={{
        backgroundColor: color,
        width: "31%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center ",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <img src={imageURL} width="150%" style={{ OverflowX: "auto" }} />
        </div>
        <h3 style={{ height: "30px", overflow: "hidden", color: color }}>
          {name}{" "}
        </h3>{" "}
        <p>From {brand}</p>
      </div>
      <p>
        {category} For {gender}
      </p>
      <p>{price}$</p>
    </div>
  );
}

export default ShoeCard;
