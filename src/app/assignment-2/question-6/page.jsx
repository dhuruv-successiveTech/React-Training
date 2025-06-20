import Clock from "@/components/assignment-2/Clock";

const Timer = () => {
  return (
    <>
      <p className="question">
        Q6. Create a functional component called Clock. Use the useState hook to
        manage a state variable named time initialized to the current time. Use
        the useEffect hook to update the time state every second to display the
        current time. Render the current time in a 'p' element. When the
        component unmounts, clear the interval to stop updating the time.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Clock />
      </div>
    </>
  );
};

export default Timer;
