import React from "react";
import preview from "../../assets/video/preview.mp4";

export default function Home() {
  return (
    <div>
      <video
        src={preview}
        controls
        width="100%"
        height="600px"
        style={{ boxSizing: "border-box", marginTop: "70px", padding: "0" }}
      />
      {/* {vid.play()} */}
    </div>
  );
}
