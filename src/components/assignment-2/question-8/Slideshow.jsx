"use client";

import { useState, useEffect } from "react";
import data from "./data";

const Slideshow = () => {
  const [play, setPlay] = useState(true);
  const [images, setImages] = useState(data[0].url);
  const handleFun = () => {
    setImages(data[i].url);
  };
//   useEffect(() => {
//     setInterval(() => {}, 2000);
//   });
  return (
    <>
      <div>
        <img src={images} alt="" />
        <button onClick={() => setPlay((prev) => !prev)}>
          {play ? `Pause` : `play`}
        </button>
      </div>
    </>
  );
};

export default Slideshow;
