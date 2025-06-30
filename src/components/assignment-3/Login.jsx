"use client";

import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Login = () => {
  const { setLoggedIn, handleAuth } = useContext(AuthContext);

  const myUserName = "Dhuruv";
  const myPassword = "123456";

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userName, password } = formData;

    if (userName === myUserName && password === myPassword) {
      setLoggedIn(true);
      handleAuth();
      alert("User Logged in");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserName
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
