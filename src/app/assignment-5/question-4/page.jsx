import { redirect } from "next/navigation";
import AllPosts from "./AllPosts";

const Posts = async () => {
  return (
    <>
      <p className="question">
        Q4. Build a Next.js component that fetches a large dataset from an API
        and displays it with pagination. Show a limited number of items per page
        and provide controls to navigate between pages. Use the native fetch and
        handle data fetching efficiently within the App Router
      </p>
     <AllPosts/>
      
    </>
  );
};

export default Posts;
