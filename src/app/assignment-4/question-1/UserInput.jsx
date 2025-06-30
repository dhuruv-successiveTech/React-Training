"use client";

import { useState } from "react";

const UserInput = () => {
  const [data, setData] = useState("");

  return (
    <>
      <label>
        {" "}
        Enter text
        <input type="text" onChange={(e) => setData(e.target.value)} />
      </label>{" "}
      You Typed : {data}
    </>
  );
};
export default UserInput;
