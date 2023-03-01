import React from "react";
import { Link } from "react-router-dom";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "31%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center ",
        border: "transparent",
        borderRadius: "10px",
      }}
    >
      <div>
        <h3
          style={{
            height: "30px",
            overflow: "hidden",
            color: color,
          }}
        >
          {name}{" "}
        </h3>{" "}
        {/* <p>From {brand}</p> */}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={imageURL}
          width="150%"
          style={{ OverflowX: "auto", height: "300px" }}
        />
      </div>
      {/* <p>
        {category} For {gender}
      </p>
      <p>{price}$</p> */}
      <div
        style={{
          backgroundColor: color,
          width: "100%",
          border: "transparent",
          borderRadius: "10px",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          {"<"}- explore
        </Link>
      </div>
      {/* <button style={{ color: color }}> </button> */}
    </div>
  );
}

export default ShoeCard;
