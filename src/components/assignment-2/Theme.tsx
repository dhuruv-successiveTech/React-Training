"use client";

import { useTheme } from "@/context";

const Theme = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <div
      style={{
        background: dark ? "black" : "white",
        width: "100%",
        height: "100%",
        color: dark ? "white" : "black",
      }}
    >
      <button onClick={toggleTheme}> button</button>
      <h1>hello</h1>
    </div>
  );
};

export default Theme;
