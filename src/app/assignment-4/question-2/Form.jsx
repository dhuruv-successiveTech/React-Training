"use client";

import { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    english: false,
    maths: false,
    hindi: false,
    science: false,
  });

  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("form submitted")
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name
        <input
          type="text"
          id="name"
          name="name"
          onChange={changeHandler}
          value={formData.name}
        />
      </label>
      <div style={{ display: "flex" }}>
        <div>Gender : </div>

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={changeHandler}
          />
          Male
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={changeHandler}
          />
          Female
        </label>

        <label>
          <input
            type="radio"
            name="gender"
            value="other"
            checked={formData.gender === "other"}
            onChange={changeHandler}
          />
          Other
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <div>Subjects : </div>

        <label>
          <input
            type="checkbox"
            name="english"
            checked={formData.english}
            onChange={changeHandler}
          />
          English
        </label>

        <label>
          <input
            type="checkbox"
            name="maths"
            checked={formData.maths}
            onChange={changeHandler}
          />
          Maths
        </label>

        <label>
          <input
            type="checkbox"
            name="science"
            checked={formData.science}
            onChange={changeHandler}
          />
          Science
        </label>
        <label>
          <input
            type="checkbox"
            name="hindi"
            checked={formData.hindi}
            onChange={changeHandler}
          />
          Hindi
        </label>
      </div>
      <button type="submit" >Submit</button>
    </form>
  );
};

export default Form;
