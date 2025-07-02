import { handlePostAction } from "../../actions";
import Pagination from "./Pagination";

const postsPerPage = 10;

const PostPage = async ({ params }) => {
  const param = await params;
  const currentPage = parseInt(param.posts) || 1;

  const skip = (currentPage - 1) * postsPerPage;

  const data = await handlePostAction(skip, postsPerPage);

  const paginatedPosts = data.posts; 
  const totalPages = Math.ceil(data.total / postsPerPage);

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
      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default PostPage;
