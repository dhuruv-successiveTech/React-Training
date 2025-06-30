"use client";

import { useState } from "react";
import DisplayMessage from "./DisplayMessage";

const Display = () => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const value = "show text";
  const showHandler = () => {
    if (text === value) {
      setShow((prev) => !prev);
    }
  };
  return (
    <>
      <label>
        {" "}
        Enter text
        <input type="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={showHandler}>{show ? `Hide` : `Show`}</button>
      {show && <DisplayMessage />}
    </>
  );
};
export default Display;
