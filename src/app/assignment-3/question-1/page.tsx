import AuthComponent from "@/components/assignment-3/AuthComponent";
import { AuthProvider } from "@/components/assignment-3/AuthContext";

const Auth = () => {
  return (
    <>
      <p className="question">
        Q1. create two components: a parent component that acts as a provider
        and a child component that consumes the context. Create a context to
        manage a user&apos;s authentication status (logged in or out). Implement a
        login button in the child component that, when clicked, updates the
        authentication status in the context to &quot;logged in.&quot; Display a message
        in the child component based on the user&apos;s authentication status. If the
        user is logged in, show &quot;Welcome, [username]!&quot; Otherwise, display
        &quot;Please log in.&quot;
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <AuthProvider>
          <AuthComponent />
        </AuthProvider>
      </div>
    </>
  );
};

export default Auth;
