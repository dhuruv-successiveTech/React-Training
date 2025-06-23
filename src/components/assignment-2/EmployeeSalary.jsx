"use client";

import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 55000 },
  ]);

  // Calculate average salary using useMemo
  const averageSalary = useMemo(() => {
    console.log("Calculating average salary...");
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
  }, [employees]);

  const updateSalaries = () => {
    const updatedEmployees = employees.map((emp) => ({
      ...emp,
      salary: emp.salary + Math.floor(Math.random() * 10000), // increase salary randomly
    }));
    setEmployees(updatedEmployees);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Employee Salaries</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name}: Rs{emp.salary}
          </li>
        ))}
      </ul>
      <h3>Average Salary: Rs{averageSalary}</h3>
      <button onClick={updateSalaries}>Update Salaries</button>
    </div>
  );
};

export default EmployeeSalary;
