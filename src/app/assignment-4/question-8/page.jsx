import CelsiusToFahrenheit from "./CelsiusToFahrenheit";

const Temperature = () => {
  return (
    <>
      <p className="question">
        Q8. Create a temperature converter component with two input fields: one
        for Celsius and one for Fahrenheit. Implement controlled components for
        both inputs. When the user enters a value in one input, the other input
        should update with the converted temperature.
      </p>
      <CelsiusToFahrenheit />
    </>
  );
};

export default Temperature;
