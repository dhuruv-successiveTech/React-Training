import { CounterWithStep } from "@/components/assignment-2";

const CounterStep = () => {
  return (
    <>
      <p className="question">
        Q5. Create a functional component called CounterWithStep. Use the
        useState hook to manage a state variable named count initialized to 0.
        Render the current value of count in a &apos;p&apos; element. Add two buttons, one
        for incrementing the count and another for decrementing it. Add an input
        field where the user can specify a step value. Update the count using
        the specified step value when the buttons are clicked.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <CounterWithStep />
      </div>
    </>
  );
};

export default CounterStep;
