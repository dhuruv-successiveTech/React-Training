// withAuth.tsx
"use client";
import { FC, useEffect, useState } from "react";

interface AuthUser {
  type: string;
  userName: string;
}

interface WithAuthProps {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  handleAuth: () => void;
  handleLogout: () => void;
}
const withAuth = <P extends object>(Component: FC<P & WithAuthProps>): FC<P> => {
  const WrappedComponent: FC<P> = (props) => {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);

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
      const storedUser = JSON.parse(localStorage.getItem("authUser") || "null") as AuthUser | null;
      if (storedUser?.type === "Admin") {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, []);

    return (
      <Component
        {...(props as P)}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleAuth={handleAuth}
        handleLogout={handleLogout}
      />
    );
  };

  return WrappedComponent;
};

export default withAuth;
