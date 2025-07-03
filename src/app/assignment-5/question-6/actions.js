"use server";

import axios from "axios";

export const handleSubmitAction = async () => {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.data;
    
    return data;
  } catch (error) {
    console.log(error);
  }
};
