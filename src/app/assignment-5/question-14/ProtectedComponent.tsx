"use client";
import React from "react";
import withAuth from "./withAuth"; // Import WithAuthProps
import { redirect } from "next/navigation"; // Import `useRouter`

interface WithAuthProps {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  handleAuth: () => void;
  handleLogout: () => void;
}

const ProtectedComponent: React.FC<WithAuthProps> = ({
  loggedIn,
  handleAuth,
  handleLogout,
}) => {

  if (!loggedIn) {
    redirect("/assignment-5/question-14/login");
  }

  return (
    <div>
      {loggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleAuth}>Login</button>
      )}
      {loggedIn && <>User Logged in successfully</>}
    </div>
  );
};

export default withAuth(ProtectedComponent);
