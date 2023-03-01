import React, { useEffect, useRef, useState } from "react";
import preview from "../../assets/video/preview.mp4";
import getData from "../../utilities";

export default function Home() {
  const videoRef = useRef(null);
  const inputRef = useRef();

  const [playing, setPlaying] = useState(false);
  console.log(videoRef);
  console.log(inputRef);

  const playVideo = () => {
    console.log(videoRef);
    videoRef.current.play();
  };

  const handleClick = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        onChange={() => {
          console.log(inputRef);
        }}
      />
      <video
        onClick={handleClick}
        ref={videoRef}
        src={preview}
        // autoPlay
        loop
        // muted
        // width="100%"
        height="20vh"
        style={{
          boxSizing: "border-box",
          // marginTop: "70px",
          padding: "0",
          zIndex: "-2",
          position: "relative",
        }}
      />
      <div>hello from here</div>
      {console.log(videoRef)}
      {playVideo()}
    </div>
  );
}
