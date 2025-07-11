"use client";

import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

import withAuth from "../withAuth";
import { redirect } from "next/navigation";

interface PropsInterface {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  handleAuth: () => void;
  handleLogout: () => void;
}

const Login = (props: PropsInterface) => {
  const { setLoggedIn, handleAuth } = props;
  const myUserName = "Dhuruv";
  const myPassword = "123456";

  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { userName, password } = formData;

    if (userName === myUserName && password === myPassword) {
      setLoggedIn(true);
      handleAuth();
      redirect("/assignment-5/question-14");
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

export default withAuth(Login);
