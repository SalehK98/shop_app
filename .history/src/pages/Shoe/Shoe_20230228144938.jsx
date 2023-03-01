import React from "react";
import ShoeCard from "../../components/ShoeCard/ShoeCard";

export default function Shoe() {
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
