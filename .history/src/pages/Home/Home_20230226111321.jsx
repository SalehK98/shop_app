import React from "react";
import preview from "../../assets/video/preview.mp4";

export default function Home() {
  return (
    <div>
      <video
        src={preview}
        controls
        width="100%"
        height="80%"
        style={{ boxSizing: "border-box", margin: "0", padding: "0" }}
      />
      {/* {vid.play()} */}
    </div>
  );
}
