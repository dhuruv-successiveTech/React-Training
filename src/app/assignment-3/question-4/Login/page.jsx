import { AuthProvider } from "@/components/assignment-3/AuthContext";
import Login from "@/components/assignment-3/Login";


const LoginPage = () => {
  return (
    <>
      <AuthProvider>
        <Login />
      </AuthProvider>
    </>
  );
};

export default LoginPage;
