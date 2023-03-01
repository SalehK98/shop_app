import React, { useEffect, useRef, useState } from "react";
import preview from "../../assets/video/preview.mp4";
import getData from "../../utilities";

export default function Home() {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  // const playVideo = () => {
  //   console.log(videoRef);
  //   videoRef.current.play();
  // };

  // const handleClick = () => {
  //   console.log("here");
  //   if (playing) {
  //     setPlaying(!playing);
  //     videoRef.current.pause();
  //   } else {
  //     setPlaying(!playing);
  //     videoRef.current.play();
  //   }
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <video
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
