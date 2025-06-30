"use server";

import axios from "axios";

export const submitPost = async (formData) => {
  const title = formData.get("title");
  const body = formData.get("body");
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 1,
    });
    return { success: true, data: res.data };
  } catch (error) {
    return {success : false, error:'Failed to submit post'}
  }
};
