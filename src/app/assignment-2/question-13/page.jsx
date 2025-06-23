import Parent from "@/components/assignment-2/Parent";

const IncrementDecrementCounter = () => {
  return (
    <>
      <p className="question">
        Q13. create two components: Parent and Child. In the Parent component,
        maintain a count state. Pass a callback function from the Parent to the
        Child that increments the count. Use the useCallback hook in the Parent
        to memoize the callback function with a dependency on the count state.
        Display the count in the Child component. Implement a button in the
        Child component that resets the count to zero when clicked.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Parent />
      </div>
    </>
  );
};

export default IncrementDecrementCounter;
