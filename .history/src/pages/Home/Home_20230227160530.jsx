import React, { useEffect } from "react";
import preview from "../../assets/video/preview.mp4";
import getData from "../../utilities";
export default function Home() {
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <video
        src={preview}
        // autoPlay
        loop
        // muted
        width="90%"
        style={{
          boxSizing: "border-box",
          // marginTop: "70px",
          padding: "0",
          zIndex: "-2",
          position: "relative",
        }}
      />
      <div>hello from here</div>
      {/* {vid.play()} */}
    </div>
  );
}
