import {RandomNumberGenerator} from "@/components/assignment-2";

const RandomNumber = () => {
  return (
    <>
      <p className="question">
        Q4. Create a functional component called RandomNumberGenerator. Use the
        useState hook to manage a state variable named randomNumber, initialized
        to a random number between 1 and 100. Render the current value of
        randomNumber. Add a button that generates a new random number and
        updates the state when clicked.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <RandomNumberGenerator />
      </div>
    </>
  );
};

export default RandomNumber;
