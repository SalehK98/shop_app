import React, { useEffect, useRef, useState } from "react";
import preview from "../../assets/video/preview.mp4";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import fetchData from "../../utilities";
import { useOutletContext } from "react-router-dom";

export default function Home(props) {
  const [data, setData] = useState(null);
  // const video = new VideoPlayer();

  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    fetchData().then((res) => {
      setData(res);
      console.log("data", data);
    });
  }, []);

  return (
    <div>
      <video
        // onClick={() => {
        //   console.log("videoRef3", videoRef);
        // }}
        onCanPlay={() => {
          //   console.log("videoRef", videoRef);
          //   console.log("playing", playing);
          setPlaying(true);
          //   console.log("videoRef", videoRef);
          //   console.log("playing", playing);
        }}
        onPlaying={() => {
          console.log("videoRef2", videoRef);
          console.log(playing);
        }}
        ref={videoRef}
        src={preview}
        autoPlay
        // loop
        muted
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
      {/* {videoRef.play()} */}
      <h1 style={{ display: "flex", textAlign: "center  " }}>
        <hr width="300vw" style={{ height: "0" }} />
        Trending This Season
        <hr width="300vw" style={{ height: "0" }} />
      </h1>

      {data ? (
        data.map((el) => {
          return <h1>{el.name}</h1>;
        })
      ) : (
        <h1>spinner</h1>
      )}
      {/* <ShoeCard /> */}
    </div>
  );
}
