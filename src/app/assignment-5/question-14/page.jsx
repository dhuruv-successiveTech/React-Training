import ProtectedComponent from "@/components/assignment-5/ProtectedComponent";
import withAuth from "./withAuth";

const ProtectedPage = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <p>
        {" "}
        Q13. Design and implement a reusable Modal component that allows
        customization of its content. Provide controls to open, close, and
        toggle the modal’s visibility. Demonstrate how to use this component to
        display different types of content within a Next.js application.
      </p>
      <ProtectedComponent></ProtectedComponent>

    </div>
  );
}
export default withAuth(ProtectedPage)
