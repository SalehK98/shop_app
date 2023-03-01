import React, { useEffect, useRef, useState } from "react";
import preview from "../../assets/video/preview.mp4";
import fetchData from "../../utilities";

let data;

export default function Home() {
  // const video = new VideoPlayer();

  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    data = fetchData();
    console.log("xdata", data.PromiseResult);
  }, []);

  return (
    <div>
      <video
        onClick={() => {
          console.log("videoRef3", videoRef);
        }}
        onCanPlay={() => {
          console.log("videoRef", videoRef);
          console.log("playing", playing);
          setPlaying(true);
          console.log("videoRef", videoRef);
          console.log("playing", playing);
        }}
        onPlaying={() => {
          console.log("videoRef2", videoRef);
        }}
        // onClick={handleClick}
        // ref={videoRef}
        src={preview}
        autoPlay
        // loop
        // muted
        controls
        width="80%"
        // height="80vh"
        style={{
          boxSizing: "border-box",
          // marginTop: "70px",
          padding: "0",
          zIndex: "-2",
          // position: "relative",
        }}
      />
      {/* {playVideo()} */}
      <h1>hello</h1>
    </div>
  );
}

console.log(data);

export { data };
