import { ManageLocalStorage } from "@/components/assignment-2";

const LocalStorageHandler = () => {
  return (
    <>
      <p className="question">
        Q18. Design a custom hook named useLocalStorage to interact with local
        storage. Create a useLocalStorage hook that allows storing and
        retrieving data from local storage. Implement methods for setting,
        getting, and removing data using the hook. Utilize the localStorage API
        within the hook to manage data. Develop a component that uses the
        useLocalStorage hook to manage user preferences.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <ManageLocalStorage />
      </div>
    </>
  );
};

export default LocalStorageHandler;
