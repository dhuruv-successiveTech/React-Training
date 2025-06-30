"use client";
import { useState } from "react";

const Filter = () => {
  const myMobiles = [
    "Samsung",
    "Xiaomi",
    "Realme",
    "Nothing",
    "Motorola",
    "Apple",
  ];
  
  const [mobiles, setMobiles] = useState(myMobiles);
  const [searchTerm, setSearchTerm] = useState("");

  const changeHandler = (e) => {
    const searchValue = e.target.value; // Directly use the input value
    setSearchTerm(searchValue);
    
    if (searchValue === "") {
      setMobiles(myMobiles);
    } else {
      setMobiles((prev) => {
        return myMobiles.filter((item) => item.toLowerCase().includes(searchValue.toLowerCase()));
      });
    }
  };

  return (
    <>
      <input type="text" onChange={changeHandler} value={searchTerm} />
      <ul>
        {mobiles.map((mobile, index) => (
          <li key={index}>{mobile}</li>
        ))}
      </ul>
    </>
  );
};

export default Filter;
