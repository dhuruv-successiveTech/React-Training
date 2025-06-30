"use client";

import { useState } from "react";
import { validatePassword } from "./validatePassword";

export default function PasswordForm() {
  const [isMatch, setIsMatch] = useState(true);
  const [formStatus, setFormStatus] = useState(null); // For optional feedback

  const onFormChange = (e) => {
    const form = new FormData(e.currentTarget);
    const pwd = form.get("password");
    const conf = form.get("confirm");
    setIsMatch(pwd === conf);
  };

  const onSubmit = async (formData) => {
    const result = await validatePassword(formData);
    setFormStatus(result.message);
  };

  return (
    <form
      action={onSubmit}
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
