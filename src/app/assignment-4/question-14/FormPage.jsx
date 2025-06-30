"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const FormPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const isPasswordValid =
    password.length >= 8 &&
    ["*", "&", "!", "@", "#"].some((op) => password.includes(op));

  const isPasswordMatch = password === confPassword;
  const isFormValid =
    userName && password && confPassword && isPasswordValid && isPasswordMatch;

  const handleAction = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    const confPassword = formData.get("confpassword");

    if (!username || !password || !confPassword) {
      return "All fields are required";
    }
    if (
      password.length < 8 ||
      !["*", "&", "!", "@", "#"].some((c) => password.includes(c))
    ) {
      return "Password must be at least 8 characters and contain special characters.";
    }

    if (password !== confPassword) {
      return "Password do not match";
    }
    return "Form Submitted Successfully";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = await handleAction(form);
    console.log(result);
  };

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      gap="1rem"
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        type="text"
        variant="outlined"
        name="username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        error={!!userName && userName.length < 1}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
        helperText={
          password && !isPasswordValid
            ? "Min. 8 characters (include *, &, !, @, #)"
            : ""
        }
        error={password !== "" && !isPasswordValid}
      />
      <TextField
        label="Confirm Password"
        type="password"
        name="confpassword"
        onChange={(e) => setConfPassword(e.target.value)}
        helperText={
          confPassword && !isPasswordMatch ? "Passwords do not match" : ""
        }
        error={confPassword !== "" && !isPasswordMatch}
      />
      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </Box>
  );
};

export default FormPage;
