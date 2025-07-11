import { AuthProvider } from "@/components/assignment-3/AuthContext";
import ThemeProvider from "@/context/ThemeContext";
import Child from "./Child";

const Auth = () => {
  return (
    <>
      <p className="question">
        Q2. Extend the previous application to demonstrate the use of nested
        contexts. Create a new context to manage user preferences (e.g., theme
        preference). Modify the parent component to provide both the
        authentication and preferences contexts. Create a child component that
        consumes both contexts. Allow the user to change their theme preference
        (light/dark) using a button in the child component. Display the theme
        preference in the UI and adjust the component&apos;s styling accordingly.
      </p>
      <div>
        <AuthProvider>
          <ThemeProvider>
            <Child />
          </ThemeProvider>
        </AuthProvider>
      </div>
    </>
  );
};

export default Auth;
