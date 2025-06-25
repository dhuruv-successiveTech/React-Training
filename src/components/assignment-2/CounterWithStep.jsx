"use client";

import { useState } from "react";

const CounterWithStep = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const stepHandler = (e) => {
    setStep(e.target.value);
  };
  const increment = () => {
    setCount(() => count + parseInt(step));
  };
  const decrement = () => {
    setCount(() => count - parseInt(step));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label>
        Step :
        <input
          style={{ padding: "0.2rem", fontSize: "1rem" }}
          onChange={stepHandler}
          type="number"
        ></input>
      </label>
      <div style={{ display: "flex", alignItems: "baseline", gap: "1rem" }}>
        <button
          style={{ padding: "0.6rem", fontSize: "1rem" }}
          onClick={decrement}
        >
          -
        </button>
        <div style={{ padding: "0.6rem", fontSize: "1rem" }}>{count}</div>
        <button
          style={{ padding: "0.6rem", fontSize: "1rem" }}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterWithStep;
