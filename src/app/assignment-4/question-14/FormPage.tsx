"use client";

import { Box, Button, TextField } from "@mui/material";
import { FormEvent, useState } from "react";
import { handleAction } from "./submitForm";

const FormPage = () => {
  const [formState, setFormState] = useState({
    userName: "",
    password: "",
    confPassword: "",
    userStatus: "",
    passwordStatus: "",
    confirmStatus: "",
  });
  const [success, setSuccess] = useState(false);

  const {
    userName,
    password,
    confPassword,
    userStatus,
    passwordStatus,
    confirmStatus,
  } = formState;

  const isPasswordValid =
    password.length >= 8 &&
    ["*", "&", "!", "@", "#"].some((op) => password.includes(op));

  const isPasswordMatch = password === confPassword;
  const isFormValid =
    userName && password && confPassword && isPasswordValid && isPasswordMatch;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = {
      username: form.get("username") as string,
      password: form.get("password") as string,
      confPassword: form.get("confpassword") as string
    };
    const result = await handleAction(formData);
    console.log(result);
    setSuccess(true);
  };

  const updateField = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
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
        onChange={(e) => updateField("userName", e.target.value)}
        onBlur={() => {
          if (userName.trim() === "")
            updateField("userStatus", "Enter username");
        }}
        helperText={userName === "" && userStatus ? userStatus : ""}
        error={userName.trim() === "" && userStatus !== ""}
      />

      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={(e) => {
          updateField("password", e.target.value);
          if (passwordStatus) updateField("passwordStatus", "");
        }}
        onBlur={() => {
          if (password.trim() === "")
            updateField("passwordStatus", "Enter password");
        }}
        variant="outlined"
        helperText={
          passwordStatus
            ? passwordStatus
            : password && !isPasswordValid
            ? "Min. 8 characters (include *, &, !, @, #)"
            : ""
        }
        error={
          (password.trim() === "" && !!passwordStatus) ||
          (password !== "" && !isPasswordValid)
        }
      />

      <TextField
        label="Confirm Password"
        type="password"
        name="confpassword"
        value={confPassword}
        onChange={(e) => {
          updateField("confPassword", e.target.value);
          if (confirmStatus) updateField("confirmStatus", "");
        }}
        onBlur={() => {
          if (confPassword.trim() === "") {
            updateField("confirmStatus", "Enter confirm password");
          }
        }}
        helperText={
          confirmStatus
            ? confirmStatus
            : confPassword && !isPasswordMatch
            ? "Passwords do not match"
            : ""
        }
        error={
          (confPassword.trim() === "" && !!confirmStatus) ||
          (confPassword !== "" && !isPasswordMatch)
        }
      />

      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
      {success && <>Form submitted successfully</>}
    </Box>
  );
};

export default FormPage;
