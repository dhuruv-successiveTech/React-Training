"use client"

import { useState } from "react";

const { submitPost } = require("./SubmitForm");

const PostForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const form = new FormData(e.target);

    const result = await submitPost(form);

    if (result.success) {
      setMessage("Post submitted Successfully");
      e.target.reset();
    } else {
      setMessage(result.error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        style={{ padding: "0.5rem" }}
      />
      <textarea
        name="body"
        placeholder="Content"
        required
        rows={5}
        style={{ padding: "0.5rem" }}
      />
      <button type="submit" style={{ padding: "0.5rem" }}>Submit</button>
      <p>message : {message}</p>
    </form>
  );
};

export default PostForm;