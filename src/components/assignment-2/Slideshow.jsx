"use client";

import { useState, useEffect } from "react";
import data from "./data";

const Slideshow = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  return (
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
        src={data[currentIndex].url}
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "6px",
          objectFit: "cover",
        }}
      />
      <button
        onClick={togglePlay}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isPlaying ? "#e63946" : "#2a9d8f",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Slideshow;
