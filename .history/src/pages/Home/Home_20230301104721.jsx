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
      // console.log("data", data);
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
        // width="100%"
        height="500px"
        style={{
          boxSizing: "border-box",
          marginTop: "20px",
          padding: "0",
          zIndex: "-2",
          // position: "relative",
        }}
      />
      <h1 style={{ display: "flex", textAlign: "center  " }}>
        <hr width="300vw" style={{ height: "0" }} />
        <span
          style={{
            color: "#252A34",
            backgroundColor: "#ff2e63",
            padding: "5px",
            boxSizing: "border-box",
            border: "transparent",
            borderRadius: "5px",
          }}
        >
          Shoe fact of the day
        </span>
        <hr width="300vw" style={{ height: "0" }} />
        <p
          style={{
            color: "#252A34",
            backgroundColor: "#ff2e63",
            padding: "5px",
            boxSizing: "border-box",
            border: "transparent",
            borderRadius: "5px",
          }}
        >
          How many pairs of shoes do you own? You may think 15 pairs of shoes is
          a lot, but did you know that there are hundreds of hundreds of
          different kinds of shoes. The most commonly worn type of shoes are
          sneakers, flats, sandals, heels, flip-flops, wedges and dance shoes.
          Those are just a few of hundreds.
        </p>
      </h1>

      <h1 style={{ display: "flex", textAlign: "center  " }}>
        <hr width="300vw" style={{ height: "0" }} />
        <span
          style={{
            color: "#252A34",
            backgroundColor: "#ff2e63",
            padding: "5px",
            boxSizing: "border-box",
            border: "transparent",
            borderRadius: "5px",
          }}
        >
          Trending This Season
        </span>
        <hr width="300vw" style={{ height: "0" }} />
      </h1>

      {data ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "95%",
            margin: "auto",
            flexWrap: "wrap",
          }}
        >
          {/* {data.map((el) => (
            <ShoeCard shoe={el} />
          ))} */}
          <ShoeCard shoe={data[0]} />

          <ShoeCard shoe={data[1]} />
          <ShoeCard shoe={data[2]} />
        </div>
      ) : (
        <h1>spinner</h1>
      )}
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
