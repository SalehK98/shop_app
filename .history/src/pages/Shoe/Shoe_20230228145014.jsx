import React, { useEffect, useRef, useState } from "react";
import fetchData from "../../utilities";

import ShoeCard from "../../components/ShoeCard/ShoeCard";

export default function Shoe() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
      // console.log("data", data);
    });
  }, []);
  return (
    <div>
      shoe
      <ShoeCard />
    </div>
  );
}