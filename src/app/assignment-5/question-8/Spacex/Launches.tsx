"use client";

import React from "react";

interface LaunchInterface {
  landpads: {
    id: number;
    full_name: string;
    details: string;
    status: string;
  }[];
  company: {
    ceo: string;
  };
}

export default function Launches({ launches }: { launches: LaunchInterface }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1>Recent SpaceX Launches</h1>
      <ul>Company CEO : {launches.company.ceo}</ul>
      <div>LandPad Status</div>
      {launches.landpads.map((launch, index) => (
        <div key={launch.id}>
          <p>
            {" "}
            {index + 1} Full Name : {launch.full_name}
          </p>
          <p> Details : {launch.details}</p>
          <p> Status : {launch.status}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
