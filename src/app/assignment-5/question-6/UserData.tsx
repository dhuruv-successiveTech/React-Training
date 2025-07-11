"use client";

import React from "react";
import { handleSubmitAction } from "./actions";

interface ItemInterface {
  id: number;
  name: string;
  username: string;
  address: {
    street: string;
  };
  phone: string;
  company: {
    name: string;
  };
}

const UserData = ({ data }: { data: ItemInterface[] }) => {
  const handleRetry = async () => {
    await handleSubmitAction();
  };
  if (data === undefined) {
    return (
      <>
        <p style={{ color: "red" }}>Please Retry</p>
        <button onClick={handleRetry}>Retry</button>
      </>
    );
  }

  return (
    <>
      <h1>User Data</h1>
      {data?.map((item) => (
        <div
          style={{ margin: "1rem", border: "1px solid #ccc", padding: "1rem" }}
          key={item.id}
        >
          <p>User ID: {item?.id}</p>
          <p>Name: {item?.name}</p>
          <p>Username: {item?.username}</p>
          <p>Address: {item?.address?.street}</p>
          <p>Phone: {item?.phone}</p>
          <p>Company: {item?.company?.name}</p>
        </div>
      ))}
    </>
  );
};

export default UserData;
