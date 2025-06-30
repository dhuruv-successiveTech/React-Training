"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";

const MyModal = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
  });
  const [show, setShow] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {show && (
        <>
          <Typography>Name {formData.name}</Typography>
          <Typography>Age {formData.age}</Typography>
          <Typography>Address {formData.address}</Typography>
        </>
      )}
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box onSubmit={submitHandler} component={"form"} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <TextField
            type="text"
            label="Name"
            name="name"
            value={formData.name}
            onChange={changeHandler}
          />
          <TextField
            type="number"
            label="Age"
            error={formData.age < 0 && "Age cannot be negative"}
            helperText={formData.age < 0 && "Age cannot be negative"}
            name="age"
            value={formData.age}
            onChange={changeHandler}
          />
          <TextField
            type="text"
            label="Address"
            name="address"
            value={formData.address}
            onChange={changeHandler}
          />
          <div>
            {" "}
            <Button type="submit"> Submit</Button>
            <Button onClick={handleClose}> Close</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
