
const getUserData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return await response.json();
};
const ServerSideApi = async () => {
  const data = await getUserData();
  return (
    <>
      <p className="question">
        Q1. Create a Next.js component using the App Router that fetches data on
        the server side (SSR) from a public API (e.g., JSONPlaceholder) and
        displays the results on the page.
      </p>
      {data && (
        <>
          <p>UserId : {data?.userId}</p>
          <p>Title : {data?.title}</p>
          <p>Body : {data?.body}</p>
        </>
      )}
    </>
  );
};

export default ServerSideApi;
