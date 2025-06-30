"use client";

import React, { useState } from "react";
import axios from "axios";

const UserData = ({ data }) => {
  const [user, setUser] = useState(data || []);
  const [errorMessage, setErrorMessage] = useState(
    data ? null : "Data not fetched"
  );

  const fetchUserData = async () => {
    try {
      setErrorMessage(null);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUser(response?.data || []);
    } catch (error) {
      setErrorMessage(error?.message || "Failed to fetch data.");
      setUser([]);
    }
  };

  if (errorMessage) {
    return (
      <>
        <p style={{ color: "red" }}>{errorMessage}</p>
        <button onClick={fetchUserData}>Retry</button>
      </>
    );
  }

  return (
    <>
      <h1>User Data</h1>
      {user?.map((item) => (
        <div
          style={{ margin: "1rem", border: "1px solid #ccc", padding: "1rem" }}
          key={item.id}
        >
          <p>User ID: {item?.id}</p>
          <p>Name: {item?.name}</p>
          <p>Username: {item?.username}</p>
          <p>Address: {item?.address?.street}</p>
          <p>Phone: {item?.phone}</p>
          <p>Company: {item?.company?.name}</p>
        </div>
      ))}
    </>
  );
};

export default UserData;
