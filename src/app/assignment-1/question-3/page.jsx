"use client";
import { Weather } from "@/component";
import { useState } from "react";

const WeatherCheck = () => {
  const [temperature, setTemperature] = useState(0);

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value); // Convert to number
  };

  return (
    <>
      <p className="question">
        Q3. Create a functional component named Weather that accepts a prop
        called temperature (a number). Display a message like "It's sunny
        today!" if the temperature is above 25°C and "It's cold today!" if the
        temperature is below 10°C. Import and render the Weather component in
        the App component with different temperature values.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <div style={{display:"flex", gap:"1rem"}}>
          Temperature :
          <select onChange={handleTemperatureChange} value={temperature}>
            <option value="">Select Temp</option>
            <option value="0">0</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </div>
        <Weather temperature={temperature} />
      </div>
    </>
  );
};

export default WeatherCheck;
