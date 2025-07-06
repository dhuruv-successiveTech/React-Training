import PostForm from "./PostForm";

export default function PostFormPage() {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        7. Create a Component in Next.js that renders a form allowing the user
        to input data, such as a post title and content. On form submission, use
        Axios to send a POST request to a public API endpoint, submitting the
        user's input data. Handle success and error states appropriately in the
        UI.
      </p>
      <PostForm />
    </div>
  );
}
