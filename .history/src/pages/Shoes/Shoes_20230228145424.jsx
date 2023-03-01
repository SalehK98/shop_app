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
  return <div>{data ? <ShoeCard shoe={el} /> : <h1>spinner</h1>}</div>;
}

export default Shoes;
