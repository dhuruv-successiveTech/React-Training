"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoToButton = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/assignment-5/question-9/spacex/1")}>
        GoToPage
      </button>
    </>
  );
};

export default GoToButton;
