import { Weather } from "@/component/Weather";
import './page.module.css'
const WeatherCheck = () => {
  return (
    <>
      <p>
          Q3. Create a functional component named Weather that accepts a prop
          called temperature (a number). Display a message like "It's sunny
          today!" if the temperature is above 25°C and "It's cold today!" if the
          temperature is below 10°C. Import and render the Weather component in
          the App component with different temperature values.
        </p>
        <div>
          <Weather temperature={30}></Weather>
        </div>
    </>
  );
};

export default WeatherCheck
