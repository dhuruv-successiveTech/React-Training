import {VotingApp} from "@/components/assignment-2";

const Votes = () => {
  return (
    <>
      <p className="question">
        Q12. Create a simple voting application using the useReducer hook. Set
        up a reducer to manage the votes for different options. Create buttons
        representing voting options. Use the useReducer hook to access the votes
        state and dispatch actions. Allow users to vote for their preferred
        options. Display the current vote count for each option.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <VotingApp />
      </div>
    </>
  );
};

export default Votes;
