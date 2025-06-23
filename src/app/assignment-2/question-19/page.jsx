
import TimerPage from "@/components/assignment-2/Timer";

const Employee = () => {
  return (
    <>
      <p className="question">
        Q19. Build a custom hook named useTimer for creating countdown timers.
        Create a useTimer hook that takes a countdown duration as a parameter.
        Use setInterval to decrement the timer at regular intervals. Return the
        current timer value and methods to start, pause, and reset the timer.
        Develop a component that utilizes the useTimer hook to display and
        control a countdown.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <TimerPage/>
      </div>
    </>
  );
};

export default Employee;
