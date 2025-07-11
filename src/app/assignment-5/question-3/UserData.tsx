"use client";

import React, { useState } from "react";
import { handleSubmitAction } from "./actions";
import CircularSize from "./loading";

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
  const [loading, setLoading] = useState(false);
  const handleRetry = async () => {
    setLoading(true);
    await handleSubmitAction();
    setLoading(false);
  };

  if (data === undefined) {
    return (
      <>
        {loading ? (
          <CircularSize />
        ) : (
          <>
            <p style={{ color: "red" }}>Please Retry</p>
            <button onClick={handleRetry}>Retry</button>
          </>
        )}
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
