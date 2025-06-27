"use client";

import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const FormValidation = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`${userName} logged in successfully`);
  };
  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection={"column"}
      gap={"1rem"}
      onSubmit={submitHandler}
    >
      <TextField
        label="Name"
        varient="outlined"
        value={userName}
        helperText={!userName ? "Enter username" : ""}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        varient="standard"
        error={
          !userName ||
          password.length < 8 ||
          !["*", "&", "!", "@", "#"].some((op) => password.includes(op))
        }
        value={password}
        helperText={
          (password.length < 8 ||
            !["*", "&", "!", "@", "#"].some((op) => password.includes(op))) &&
          "Min. 8 characters (include *,&,!,@,#)"
        }
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        varient="standard"
        type="password"
        error={!userName || !password || !confPassword}
        value={confPassword}
        helperText={password != confPassword && "Password do not match"}
        onChange={(e) => setConfPassword(e.target.value)}
      />
      <Button
        disabled={
          !userName ||
          !password ||
          !confPassword ||
          password != confPassword ||
          password.length < 8 ||
          !["*", "&", "!", "@", "#"].some((op) => password.includes(op))
        }
        type="submit"
      >
        Submit
      </Button>
    </Box>
  );
};

export default FormValidation;
