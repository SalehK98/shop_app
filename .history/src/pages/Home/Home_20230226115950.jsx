import React from "react";
import preview from "../../assets/video/preview.mp4";

export default function Home() {
  return (
    <div>
      <video
        src={preview}
        controls
        width="1400px"
        height="700px"
        style={{ boxSizing: "border-box", marginTop: "0", padding: "0" }}
      />
      {/* {vid.play()} */}
    </div>
  );
}
