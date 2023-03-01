import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

function ShoeCard({ shoe }) {
  const { name, price, imageURL, category, gender, brand, color } = shoe;
  return (
    <div
      style={{
        backgroundColor: color,
        width: "26%",
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
            color: "white",
          }}
        >
          {name}{" "}
        </h3>{" "}
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img
          src={imageURL}
          width="100%"
          style={{ OverflowX: "hidden", height: "100%" }}
        />
      </div>

      <div
        style={{
          boxSizing: "border-box",
          backgroundColor: color,
          width: "100%",
          border: "transparent",
          borderBottomRightRadius: "10px",
          borderBottomLeftRadius: "10px",
          padding: "5px",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          to={`shoes/${shoe.id}`}
        >
          <span style={{ marginRight: "10px" }}>explore</span>{" "}
          <BsFillArrowRightCircleFill />
        </Link>
      </div>
    </div>
  );
}

export default ShoeCard;
