
import { useState } from "react";

const PersonForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });
  const formHandler = (e) => {
    let { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <form>
        <input onChange={formHandler} value={formData.name}></input>
        <input onChange={formHandler} value={formData.lastName}></input>
        <input onChange={formHandler} value={formData.age}></input>
      </form>
    </>
  );
};

export default PersonForm;