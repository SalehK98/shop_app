import React from "react";
import preview from "../../assets/video/preview.mp4";

export default function Home() {
  return (
    <div>
      Home
      <video src={preview} controls style={{ boxSizing: "border-box" }} />
      {/* {vid.play()} */}
    </div>
  );
}
