"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextType {
  loggedIn: boolean;
  userName: string;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
  handleAuth: () => void;
  handleLogout: () => void;
}

interface storedUser {
  type: string;
  userName: string;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleAuth = () => {
    const user = "Dhuruv";
    const userData: storedUser = { type: "Admin", userName: user };
    localStorage.setItem("authUser", JSON.stringify(userData));
    setUserName(user);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setUserName("");
    setLoggedIn(false);
  };

  useEffect(() => {
    const authuser = localStorage.getItem("authUser");
    if (authuser) {
      const storedUser: storedUser = JSON.parse(authuser);
      if (storedUser?.type === "Admin") {
        setUserName(storedUser.userName);
        setLoggedIn(true);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedIn, userName, setLoggedIn, handleAuth, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Auth context not found");
  }
  return context;
};
