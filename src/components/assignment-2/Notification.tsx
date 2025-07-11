"use client";

import { useState, useEffect } from "react";

const Notification = () => {
  const [message, setMessage] = useState("");

  const handleMessage = () => {
    setMessage("This is a display message");
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer); 
    }
  }, [message]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      {message && (
        <p
          style={{
            backgroundColor: "#f8d7da",
            color: "#721c24",
            borderRadius: "5px",
            padding: "1rem",
            fontSize: "1.2rem",
            textAlign: "center",
            width: "300px",
          }}
        >
          {message}
        </p>
      )}
      <button
        onClick={handleMessage}
        style={{
          padding: "0.8rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Message
      </button>
    </div>
  );
};

export default Notification;
