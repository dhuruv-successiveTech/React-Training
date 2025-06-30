"use client";

import { useState } from "react";

const CelsiusToFahrenheit = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const celsiusHandler = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(e.target.value * 1.8 + 32);
  };
  const fahrenheitHandler = (e) => {
    setFahrenheit(e.target.value);
    setCelsius(((e.target.value - 32) * 5) / 9);
  };

  return (
    <>
      <label htmlFor="">
        {" "}
        Celsius
        <input type="number" value={celsius} onChange={celsiusHandler} />
      </label>

      <label htmlFor="">
        {" "}
        Fahrenheit
        <input type="number" value={fahrenheit} onChange={fahrenheitHandler} />
      </label>
    </>
  );
};

export default CelsiusToFahrenheit;
