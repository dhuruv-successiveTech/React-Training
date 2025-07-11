"use client";

import { FormEvent, useState } from "react";
import { submitPost } from "./SubmitForm";

const PostForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const form = new FormData(e.currentTarget);
    const formData = {
      title: form.get("title") as string,
      body: form.get("body") as string,
    };
    const result = await submitPost(formData);

    if (result.success) {
      setMessage("Post submitted Successfully");
    } else {
      setMessage("Error");
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
      <button type="submit" style={{ padding: "0.5rem" }}>
        Submit
      </button>
      <p>message : {message}</p>
    </form>
  );
};

export default PostForm;
