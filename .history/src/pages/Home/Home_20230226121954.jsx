import React from "react";
import preview from "../../assets/video/preview.mp4";

export default function Home() {
  return (
    <div>
      <video
        src={preview}
        autoPlay
        loop
        width="100%"
        style={{
          boxSizing: "border-box",
          marginTop: "70px",
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
