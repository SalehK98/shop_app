import React from "react";
import preview from "../../assets/video/preview.mp4";

export default function Home() {
  return (
    <div>
      <video
        src={preview}
        controls
        width="100%"
        style={{ boxSizing: "border-box" }}
      />
      {/* {vid.play()} */}
    </div>
  );
}
