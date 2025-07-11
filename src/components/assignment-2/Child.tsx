import React from "react";

interface ChldProps {
  count : number;
  onIncrement:()=>void;
  onReset : ()=>void
}
const Child = ({ count, onIncrement, onReset }:ChldProps) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "15px", marginTop: "10px" }}
    >
      <h3>Child Component</h3>
      <p>Count: {count}</p>
      <button onClick={onIncrement} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default Child;
