import { redirect } from "next/navigation";

const Posts = async () => {
  return (
    <>
      <p className="question">
        Q4. Build a Next.js component that fetches a large dataset from an API
        and displays it with pagination. Show a limited number of items per page
        and provide controls to navigate between pages. Use the native fetch and
        handle data fetching efficiently within the App Router
      </p>
      {redirect(`/assignment-5/question-4/posts/1`)}

      
    </>
  );
};

export default Posts;
