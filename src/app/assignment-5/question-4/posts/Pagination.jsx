"use client";
const { useParams, useRouter } = require("next/navigation");

const Pagination = ({ totalPages }) => {
  const { posts } = useParams();
  const router = useRouter();
    
  const currentPage = parseInt(posts);
  const handlePageChange = (pageNumber) => {
    router.push(`/assignment-5/question-4/posts/${pageNumber}`);
  };



  return (
    <div>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <p>
        {" "}
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => {
          handlePageChange(currentPage + 1);
        }}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
