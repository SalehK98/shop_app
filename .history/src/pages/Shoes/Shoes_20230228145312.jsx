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
    <div>
      {data.map((el) => {
        return <ShoeCard key={el.id} shoe={el} />;
      })}
    </div>
  );
}

export default Shoes;
