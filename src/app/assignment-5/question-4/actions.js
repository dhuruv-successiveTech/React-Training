"use server";

export const handlePostAction = async (skip = 0, limit = 10) => {
  try {
    const response = await fetch(`https://dummyjson.com/posts?skip=${skip}&limit=${limit}`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.log("Error fetching posts:", error);
    return null;
  }
};
