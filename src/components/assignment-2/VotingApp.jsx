"use client";
import React, { useReducer } from "react";
import { voteReducer, initialVotes } from "./Reducer";

const VotingApp = () => {
  const [votes, dispatch] = useReducer(voteReducer, initialVotes);
  const options = Object.keys(votes);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Vote for your favorite option:</h2>
      {options.map((option) => (
        <div key={option} style={{ marginBottom: "10px" }}>
          <button onClick={() => dispatch({ type: "VOTE", option })}>
            Vote for {option}
          </button>
          <span style={{ marginLeft: "10px" }}>Votes: {votes[option]}</span>
        </div>
      ))}
    </div>
  );
};

export default VotingApp;
