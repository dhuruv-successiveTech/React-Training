import axios from "axios";

interface FormInterface {
  title: string;
  body: string;
}

export const submitPost = async (formData: FormInterface) => {
  const { title, body } = formData;
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      userId: 1,
    });
    return { success: true, data: res.data };
  } catch (error) {
    return { success: false, error: "Failed to submit post" };
  }
};
