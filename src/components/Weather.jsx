"use client"

import { useState } from "react";

const Weather = ({ temperature }) => {
  const [temp, setTemp] = useState("");

  const handleTemperatureChange = (e) => {
    setTemp(e.target.value); // Convert to number
  };
  return (
    <>
      <div style={{ display: "flex", gap: "1rem" }}>
        Temperature :
        <select onChange={handleTemperatureChange} >
          <option value="">select value</option>
          {temperature.map((value,index)=>(
            <option key={index} type="text" >{value}</option>
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
            <p>It's sunny today!</p>
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
            <p>It's cold today!</p>
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
            <p>It's pleasent weather today!</p>
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
