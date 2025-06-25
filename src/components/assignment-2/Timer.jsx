"use client";

import useTimer from "@/hooks/useTimer";

export default function TimerPage() {
  const { seconds, isRunning, start, pause, reset } = useTimer(10); // 10 second timer

  return (
    <div style={{ padding: 30, textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Countdown Timer</h1>
      <h2 style={{ fontSize: 48 }}>{seconds}s</h2>

      <div style={{ marginTop: 20 }}>
        <button
          onClick={start}
          disabled={isRunning}
          style={{ marginRight: 10 }}
        >
          Start
        </button>
        <button onClick={pause} style={{ marginRight: 10 }}>
          Pause
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <p style={{ marginTop: 20, color: "gray" }}>
        {isRunning ? "Running..." : "Stopped or finished."}
      </p>
    </div>
  );
}
