"use client";
import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import { useEffect, useState } from "react";
const TicTacToe = () => {
  const [index, setIndex] = useState("");
  const [value, setValue] = useState("");
  const [userClick, setUserClick] = useState(false);
  const [boxData, setBoxData] = useState({});

  const handleIndex = () => {
    if (index === "X") {
      setValue("O");
    } else {
      setValue("X");
    }
  };

  const handleComputerClick = () => {
    const myIndex = Math.floor(Math.random() * 10);
    setIndex(prev=>prev == "O" ? "X" : "O");
    setBoxData((prev) => {
      const newObject = { ...prev };
      newObject[myIndex] = true;
      return newObject;
    });
  };

  useEffect(() => {
    handleIndex();
  }, []);

  useEffect(() => {
    handleComputerClick();
  }, [userClick]);

  const handleChange = (e) => {
    setIndex(e.target.value);
  };


  const clickHandle = (e) => {
    setBoxData((prev) => ({ ...prev, [e.target.name]: !e.target.checked }));
    setUserClick(true);
  };

  return (
    <Box>
      <TextField placeholder="enter X or O" onChange={handleChange}>
        {" "}
      </TextField>
      <Box
        flexWrap={"wrap"}
        width={"300px"}
        display={"flex"}
        gap={"1rem"}
        height={"300px"}
        sx={{ borderColor: "grey.500", border: 1 }}
        variant="contained"
        aria-label="Basic button group"
      >
        <Button
          onClick={clickHandle}
          name="1"
          value={boxData}
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
        >
          {boxData[1] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="2"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={2}
        >
          {boxData[2] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="3"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={3}
        >
          {boxData[3] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="4"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={4}
        >
          {boxData[4] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="5"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={5}
        >
          {boxData[5] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="6"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={6}
        >
          {boxData[6] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="7"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={7}
        >
          {boxData[7] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="8"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={8}
        >
          {boxData[8] === true ? value : ""}
        </Button>
        <Button
          onClick={clickHandle}
          name="9"
          checked={boxData}
          sx={{ borderColor: "grey.500", border: 1, padding: "2rem" }}
          value={9}
        >
          {boxData[9] === true ? value : ""}
        </Button>
      </Box>
    </Box>
  );
};

export default TicTacToe;
