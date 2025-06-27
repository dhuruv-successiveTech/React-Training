"use client";

import { useState } from "react";

const PasswordValidation = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (password == confPassword && password != "" && confPassword != "") {
      console.log(`${userName} logged in successfully`);
    } else {
      console.log("password do not match");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="">
        {" "}
        UserName
        <input
          required
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label>
        {" "}
        Password
        <input
          required
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        {" "}
        Confirm Password
        <input
          required
          type="password"
          onChange={(e) => setConfPassword(e.target.value)}
        />
      </label>{" "}
      <button disabled={password != confPassword} type="submit">
        Submit
      </button>
    </form>
  );
};
export default PasswordValidation;
