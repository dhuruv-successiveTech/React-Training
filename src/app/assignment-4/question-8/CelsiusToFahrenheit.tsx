"use client";

import { ChangeEvent, useState } from "react";

const CelsiusToFahrenheit = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(32);
  const celsiusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const temp = Number(e.target.value);
    setCelsius(temp);
    setFahrenheit(temp * 1.8 + 32);
  };
  const fahrenheitHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const temp = Number(e.target.value);
    setFahrenheit(temp);
    setCelsius(((temp - 32) * 5) / 9);
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
