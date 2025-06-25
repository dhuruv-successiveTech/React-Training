"use client";
import { useState } from "react";

const PersonForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const [show, setShow] = useState(false);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setShow(true);
    console.log(formData);
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <label style={{ display: "flex", gap: "1rem" }}>
          {" "}
          First Name
          <input
            type="text"
            name="firstName"
            required
            value={formData.firstName}
            onChange={formHandler}
          />
        </label>
        <label style={{ display: "flex", gap: "1rem" }}>
          {" "}
          Last Name
          <input
            type="text"
            required
            name="lastName"
            value={formData.lastName}
            onChange={formHandler}
          />
        </label>
        <label style={{ display: "flex", gap: "4rem" }}>
          {" "}
          Age
          <input
            required
            type="number"
            name="age"
            min={5}
            value={formData.age}
            onChange={formHandler}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {show && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>firstName : {formData.firstName} </p>
          <p>lastName : {formData.lastName} </p>
          <p>age : {formData.age}</p>
        </div>
      )}
    </div>
  );
};

export default PersonForm;
