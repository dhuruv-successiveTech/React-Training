"use client";

import { useState, useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date(Date.now()).toLocaleTimeString()
  );

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTime(new Date(Date.now()).toLocaleTimeString());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  
  

  return (
    <p style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {currentTime}
    </p>
  );
};

export default Clock;
