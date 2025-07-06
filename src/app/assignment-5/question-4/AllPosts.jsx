"use client";
import { redirect } from "next/navigation";

const AllPosts = () => {
  return (
    <button onClick={() => redirect("/assignment-5/question-4/posts/1")}>
      Go To Posts
    </button>
  );
};

export default AllPosts;
