import { handleUserAction } from "./actions";

const ServerSideApi = async () => {
  const data = await handleUserAction();
  return (
    <>
      <p className="question">
        Q5. Create a Next.js component that fetches data from a public API (like
        JSONPlaceholder) using Axios and displays the results on the page. Use
        the App Router conventions and perform the data fetching on the server
        side.
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
