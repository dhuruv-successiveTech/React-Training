"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleAuth = () => {
    const user = "Dhuruv"
    localStorage.setItem("authUser", JSON.stringify({ type:'Admin',userName: user }));
    setUserName(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setUserName("");
    setLoggedIn(false);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("authUser"));
    if (storedUser?.type==='Admin') {
      setUserName(storedUser.userName);
      setLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedIn, userName,setLoggedIn, handleAuth, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
