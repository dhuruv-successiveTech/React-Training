"use client";

import { useEffect, useState } from "react";

const DropDown = () => {
  const [optionValue, setOptionValue] = useState("");
  const assignmentArray = [
    "Assignment-1",
    "Assignment-2",
    "Assignment-3",
    "Assignment-4",
    "Assignment-5",
    "Assignment-6",
  ];

  return (
    <>
      <select
        onChange={(e) => {
          setOptionValue(e.target.value);
        }}
      >
        Assignments
        <option value="">select assignments</option>
        {assignmentArray.map((assignment, index) => (
          <option key={index} value={assignment}>
            {assignment}
          </option>
        ))}
      </select>
      {optionValue && <p>selected assignment is {optionValue}</p>}
    </>
  );
};
export default DropDown;
