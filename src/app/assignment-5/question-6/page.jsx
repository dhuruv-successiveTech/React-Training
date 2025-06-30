import axios from "axios";
import UserData from "./UserData";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = response?.data;
    return (
      <>
        <p className="question">
          Q6. a Modify your previous Next.js Server Component that fetches data
          with Axios to include error handling. If the request fails, display an
          error message and provide a retry button so the user can attempt
          fetching the data again. Implement the retry logic in a Client
          Component to handle user interaction.
        </p>
        <UserData data={data}></UserData>;
      </>
    );
  } catch (error) {
    return <UserData data={null}></UserData>;
  }
};

export default fetchData;
