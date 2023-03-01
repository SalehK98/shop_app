import React, { useEffect, useRef } from "react";
import preview from "../../assets/video/preview.mp4";
import getData from "../../utilities";

export default function Home() {
  const videoRef = useRef(null);
  const inputRef = useRef();
  console.log(videoRef);
  console.log(inputRef);

  const playVideo = () => {
    videoRef.current.play();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input ref={inputRef} />
      <video
        ref={videoRef}
        src={preview}
        // autoPlay
        loop
        // muted
        // width="100%"
        height="20%"
        style={{
          boxSizing: "border-box",
          // marginTop: "70px",
          padding: "0",
          zIndex: "-2",
          position: "relative",
        }}
      />
      <div>hello from here</div>
      {/* {playVideo()} */}
    </div>
  );
}
