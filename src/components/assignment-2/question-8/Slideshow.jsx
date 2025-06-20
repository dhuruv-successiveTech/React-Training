"use client";

import { useState, useEffect } from "react";
import data from "./data";

const Slideshow = () => {
  const [play, setPlay] = useState(true);
  const [images, setImages] = useState(data[0].url);
  const [limit, setLimit] = useState(0);

  const handleFun = () => {
    if (limit < data.length) {
      setImages(data[limit].url);
      setLimit(limit + 1);
    } else {
      setImages(data[limit - 1].url);
      setLimit(limit - 1);
    }
  };

  useEffect(() => {
    if (play) {
      const id = setInterval(() => {
        handleFun();
      }, 2000);
      return () => clearInterval(id);
    } else {
      setImages(data[limit].url);
    }
  });

  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          maxWidth: "600px",
          margin: "30px auto",
        }}
      >
        <img
          src={images}
          alt="Slideshow"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
        <button
          onClick={() => setPlay((prev) => !prev)}
          disabled={limit === data.length}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: play
              ? "#e63946"
              : data.length === limit
              ? "#2a9d8f"
              : "pink",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        >
          {play ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
};

export default Slideshow;
