import React, { useEffect, useState } from "react";
import fetchData from "../../utilities";
import ShoeCard from "../../components/ShoeCard/ShoeCard";

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
        gap: "5px",
        width: "95%",
        margin: "auto",
        flexWrap: "wrap",
      }}
    >
      {data ? (
        data.map((el) => {
          return <ShoeCard shoe={el} />;
        })
      ) : (
        <h1>spinner</h1>
      )}
    </div>
  );
}

export default Shoes;
