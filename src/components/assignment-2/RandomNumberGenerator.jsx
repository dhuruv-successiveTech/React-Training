"use client";

import { useState } from "react";

const RandomNumberGenerator = () => {
  const [random, setRandom] = useState(1);
  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div style={{display:'flex', gap:'1rem'}}>
      <button onClick={generateRandom}>Generate Random</button>
      <p>{random}</p>
    </div>
  );
};

export default RandomNumberGenerator;
