import React, { useEffect, useRef, useState } from "react";
import preview from "../../assets/video/preview.mp4";
import getData from "../../utilities";

export default function Home() {
  // const videoRef = useRef(null);

  // const [playing, setPlaying] = useState(false);

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
        // onClick={handleClick}
        // ref={videoRef}
        src={preview}
        // autoPlay
        // loop
        // muted
        controls
        width="100%"
        // height="80vh"
        style={{
          boxSizing: "border-box",
          // marginTop: "70px",
          padding: "0",
          zIndex: "-2",
          position: "relative",
        }}
      />
      {/* {playVideo()} */}
    </div>
  );
}
