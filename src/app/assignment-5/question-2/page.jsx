import UserData from "./UserData";

export default async function UsersPageServer() {
  let users = [];
  let error = null;
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/user");

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    users = await res?.json();
  } catch (err) {
    error = "Failed to load users. Please try again later.";
  }

  return (
    <>
      <p>
        Q2. Extend your Next.js component that fetches data from a public API
        (https://jsonplaceholder.typicode.com/users) using server-side rendering
        (SSR) with the App Router to handle errors gracefully. If the fetch
        request fails during SSR, display a user-friendly error message on the
        page. Additionally, provide a retry button so users can attempt to fetch
        the data again without reloading the entire page.
      </p>
      <UserData data={users} error={error} />;
    </>
  );
}
