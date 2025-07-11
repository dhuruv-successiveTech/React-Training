import { handleSubmitAction } from "./actions";
import UserData from "./UserData";

export default async function UsersPageServer() {
  try {
    const data = await handleSubmitAction();
    return (
      <>
        <p>
          Q6. Modify your previous Next.js Server Component that fetches data
          with Axios to include error handling. If the request fails, display an
          error message and provide a retry button so the user can attempt
          fetching the data again. Implement the retry logic in a Client
          Component to handle user interaction.
        </p>
        <UserData data={data} />
      </>
    );
  } catch (err) {
    console.log("err", err);
  }
}
