import { Weather } from "@/components";

const WeatherCheck = () => {
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
        <Weather temperature={[9, 20, 25, 35]} />
      </div>
    </>
  );
};

export default WeatherCheck;
