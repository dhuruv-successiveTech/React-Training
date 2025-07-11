"use client";
import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div style={{ border: "2px solid black", padding: "20px", margin: "20px" }}>
      <h2>Parent Component</h2>
      <Child count={count} onIncrement={incrementCount} onReset={resetCount} />
    </div>
  );
};

export default Parent;
