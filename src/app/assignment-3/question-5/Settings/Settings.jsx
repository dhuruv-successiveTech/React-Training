"use client";
import { AuthContext } from "@/components/assignment-3/AuthContext";
import { redirect } from "next/navigation";
import { useContext } from "react";

const Settings = () => {
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? (
    <>
      <h1>This is Settings page</h1>
    </>
  ) : (
    redirect("/assignment-3/question-4/Login")
  );
};

export default Settings;
