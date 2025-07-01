"use client";
import React from "react";
import withAuth  from "./withAuth";

const ProtectedComponent = (props) => {
  const { loggedIn, handleAuth, handleLogout } = props;
  return (
    <div>
      {loggedIn ? (
        <button onClick={handleLogout}>logout</button>
      ) : (
        <button onClick={handleAuth}>login</button>
      )}
    </div>
  );
};

export default withAuth(ProtectedComponent);
