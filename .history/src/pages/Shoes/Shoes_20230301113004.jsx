import React, { useEffect, useState } from "react";
import fetchData from "../../utilities";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

function Shoes() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
      // console.log("data", data);
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "50px",
        width: "95%",
        margin: "auto",
        flexWrap: "wrap",
        marginTop: "50px",
      }}
    >
      <div
        style={{
          backgroundColor: "#F6F6F6",
          opacity: "0.7",
          width: "26%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center ",
          border: "transparent",
          borderRadius: "10px",
        }}
      >
        <div style={{ border: "2px solid gray", borderRadius: "5px" }}>
          <AiOutlineAppstoreAdd
            size="150"
            onClick={() => {
              console.log("added");
            }}
          />
        </div>
        Add Item
      </div>
      {data ? (
        data.map((el) => {
          return <ShoeCard shoe={el} key={el.id} />;
        })
      ) : (
        <h1>spinner</h1>
      )}
    </div>
  );
}

export default Shoes;
