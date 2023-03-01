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
        <h3 style={{ height: "30px", overflow: "hidden" }}>{name} </h3>{" "}
        <p>From {brand}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={imageURL} width="120%" style={{ msOverflowX: "auto" }} />
      </div>
      <p>
        {category} For {gender}
      </p>
      <p>{price}$</p>
    </div>
  );
}

export default ShoeCard;
