"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) => {
  const router = useRouter();
  const current = Number(currentPage);
  const handleClick = (pagenumber:number) => {
    router.push(`/assignment-5/question-9/spacex/${pagenumber}`);
  };
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <button onClick={() => handleClick(current - 1)}>Prev</button>
      <p>
        {currentPage} of {totalPages}
      </p>
      <button onClick={() => handleClick(current + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
