import Pagination from "../Pagination";

const postsPerPage = 10;

const PostPage = async ({ params }) => {
  const currentPage = parseInt(params.posts) || 1;
console.log("currentPage", currentPage);

  let allPosts = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    allPosts = await res.json();
  } catch (error) {
    return <p>Please try again later.</p>;
  }
  
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const start = (currentPage - 1) * postsPerPage;
  const paginatedPosts = allPosts.slice(start, start + postsPerPage);
  console.log(start);
  console.log(paginatedPosts);

  
  return (
    <div>
      <h1>Posts - page {currentPage}</h1>
      <ul>
        {paginatedPosts.map((post) => (
          <li key={post?.id}>
            <p>Post : {post.id}</p>
            <h2>Title : {post?.title}</h2>
            <p>Body : {post?.body}</p>
            <br />
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages}/>
    </div>
  );
};

export default PostPage;