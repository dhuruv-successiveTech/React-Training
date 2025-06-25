"use client";

import { useState, useEffect } from "react";

const Slideshow = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState(2000);
  const data = Array.from({ length: 10 }, (_, i) => ({
    url: `/assets/img${i + 1}.jpg`,
  }));

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, delay * 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, delay]);

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
          height: "400px",
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
      <input
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "lightgrey",
          border: "1px",
          borderRadius: "4px",
        }}
        placeholder="in secs"
        type="text"
        onChange={(e) => setDelay(e.target.value)}
      />
    </div>
  );
};

export default Slideshow;
