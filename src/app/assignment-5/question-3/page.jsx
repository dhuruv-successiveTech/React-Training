// app/users/page.jsx (Server-side component)
import UserData from "./UserData";

export default async function UsersPageServer() {
  let users = [];
  let error = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    users = await res.json();
  } catch (err) {
    error = "Failed to load users. Please try again later.";
  }

  // Pass data or error to the Client Component
  return (
    <>
      <p>
        Q3. Enhance your Next.js component that fetches data from a public API by
        adding a loading indicator, such as a spinner. This indicator should be
        visible while the data is being fetched and hidden once the data has
        loaded successfully. Ensure the loading state is properly managed on the
        client side, especially when implementing retry functionality. Use the
        native fetch function and integrate this loading feedback seamlessly
        with the error handling and data display in your component.
      </p>
      <UserData userData={users} error={error} />;
    </>
  );
}
