"use client";
import { useEffect, useState } from "react";

const withAuth = (Component) => (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleAuth = () => {
    const user = "Dhuruv";
    localStorage.setItem(
      "authUser",
      JSON.stringify({ type: "Admin", userName: user })
    );
    setLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setLoggedIn(false);
  };
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser?.type === "Admin") {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Component
      {...props}
      loggedIn={loggedIn}
      handleAuth={handleAuth}
      handleLogout={handleLogout}
    ></Component>
  );
};

export default withAuth;
