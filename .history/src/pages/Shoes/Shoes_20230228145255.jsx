import React from "react";
import fetchData from "../../utilities";
import ShoeCard from "../../components/ShoeCard/ShoeCard";

function Shoes() {
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
