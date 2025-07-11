"use client";

import { ChangeEvent, useState } from "react";

interface WeatherProps {
  temperature: number[];
}
const Weather = ({ temperature }: WeatherProps) => {
  const [temp, setTemp] = useState<number | "">("");

  const handleTemperatureChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setTemp(value != "" ? parseInt(value) : ""); // Convert to number
  };
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        Temperature :
        <select onChange={handleTemperatureChange}>
          <option value="">select value</option>
          {temperature.map((value: number, index: number) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
      {temp !== "" ? (
        temp > 25 ? (
          <div
            style={{
              display: "flex",
              color: "DarkOrange",
              flexDirection: "column",
              gap: "10px",
              margin: "1rem",
            }}
          >
            <p>The Temperature is {temp}</p>
            <p>It is sunny today!</p>
          </div>
        ) : temp < 10 ? (
          <div
            style={{
              display: "flex",
              color: "blue",
              flexDirection: "column",
              gap: "10px",
              margin: "1rem",
            }}
          >
            <p>The Temperature is {temp}</p>
            <p>It is cold today!</p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              color: "green",
              flexDirection: "column",
              gap: "10px",
              margin: "1rem",
            }}
          >
            <p>The Temperature is {temp}</p>
            <p>It is pleasent weather today!</p>
          </div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            color: "red",
            flexDirection: "column",
            gap: "10px",
            margin: "1rem",
          }}
        >
          <p>Please select temperature</p>
        </div>
      )}
    </>
  );
};

export default Weather;
