// app/users/UsersPage.jsx (Client-side component)
"use client";

import { useState } from "react";

const UserData = ({ userData, error }) => {
  const [data, setData] = useState(userData);
  const [localError, setLocalError] = useState(error);

  const handleRetry = async () => {
    setLocalError(null);
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setData(data);
      setLocalError(null); 
    } catch (err) {
      setLocalError("Failed to load users. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      {localError && (
        <div style={{ color: "red", marginBottom: "20px" }}>
          <p>{localError}</p>
          <button onClick={handleRetry}>Retry</button>
        </div>
      )}
      <ul>
        {data && data.length > 0 ? (
          data.map((user) => (
            <li key={user.id}>
              <p>Id : {user.id}</p>
              <p>Name : {user.name}</p>
               <p>Email : {user.email}</p>
               <br />
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
};

export default UserData;
