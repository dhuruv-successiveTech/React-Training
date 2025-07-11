"use client";

import Image from "next/image";
import { useState, useEffect, ChangeEvent } from "react";

interface ImageData {
  url: string;
}

const Slideshow = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [delay, setDelay] = useState<number>(1000);
  const data: ImageData[] = Array.from({ length: 10 }, (_, i) => ({
    url: `/assets/img${i + 1}.jpg`, 
  }));

  useEffect(() => {
    if (!isPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [isPlaying, delay, data.length]);

  const togglePlay = () => setIsPlaying((prev) => !prev);

  const handleDelayChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = Number(value);

    setDelay(parsedValue * 1000);
  };

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
      <Image
        src={data[currentIndex].url}
        alt={`Image ${currentIndex + 1}`}
        width={300}
        height={300}
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
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
        placeholder="Delay in secs"
        type="number"
        value={delay / 1000} 
        onChange={handleDelayChange} 
      />
    </div>
  );
};

export default Slideshow;
