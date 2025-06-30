"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const FormValidation = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${userName} logged in successfully`);
    setSuccess(true);
  };

  const isPasswordValid =
    password.length >= 8 &&
    ["*", "&", "!", "@", "#"].some((op) => password.includes(op));

  const isPasswordMatch = password === confPassword;

  const isFormValid =
    userName && password && confPassword && isPasswordValid && isPasswordMatch;

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
        variant="standard"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
      />

      <TextField
        label="Password"
        type="password"
        variant="standard"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
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
        variant="standard"
        value={confPassword}
        required
        onChange={(e) => setConfPassword(e.target.value)}
        helperText={
          confPassword && !isPasswordMatch ? "Passwords do not match" : ""
        }
        error={confPassword !== "" && !isPasswordMatch}
      />

      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
      {success && <div>User logged Submitted Successfully</div>}
    </Box>
  );
};

export default FormValidation;
