"use client";

import { FormEvent, useState } from "react";
import { validatePassword } from "./validatePassword";
interface FormDataInterface {
  username: string;
  password: string;
  confirm: string;
}

export default function PasswordForm() {
  const [isMatch, setIsMatch] = useState(true);
  const [formStatus, setFormStatus] = useState("");

  const onFormChange = (e: FormEvent<HTMLFormElement>) => {
    const form = new FormData(e.currentTarget);
    const pwd = form.get("password");
    const conf = form.get("confirm");
    setIsMatch(pwd === conf);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData: FormDataInterface = {
      username: form.get("username") as string,
      password: form.get("password") as string,
      confirm: form.get("confirm") as string,
    };
    const result = await validatePassword(formData);
    setFormStatus(result.message);
  };

  return (
    <form
      onSubmit={onSubmit}
      onChange={onFormChange}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <label>
        Username
        <input name="username" type="text" required />
      </label>

      <label>
        Password
        <input name="password" type="password" required />
      </label>

      <label>
        Confirm Password
        <input name="confirm" type="password" required />
      </label>

      <button type="submit" disabled={!isMatch}>
        Submit
      </button>
      {formStatus && <p style={{ color: "blue" }}>{formStatus}</p>}
    </form>
  );
}
