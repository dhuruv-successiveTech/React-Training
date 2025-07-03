"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ currentPage, totalPages }) => {
  const router = useRouter();

  const handlePageChange = (pageNumber) => {
    router.push(`/assignment-5/question-4/posts/${pageNumber}`);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
      >
        Previous
      </button>
      <p>
        Page {currentPage} of {totalPages}
      </p>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
