"use client";
import { useState } from "react";

const PersonForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const formHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  

  return (
    <>
      <form style={{display:"flex", flexDirection:"column", gap:"1rem"}}>
        <label style={{display:"flex", gap:"1rem"}}> First Name
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={formHandler}
          />
        </label>
        <label style={{display:"flex", gap:"1rem"}}> Last Name
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={formHandler}
          />
        </label>
        <label style={{display:"flex", gap:"4rem"}}> Age
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={formHandler}
          />
        </label>
        <button onClick={submitHandler}>Submit</button>
      </form>
    </>
  );
};

export default PersonForm;
