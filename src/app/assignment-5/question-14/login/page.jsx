"use client"
const Login = () => {
  const handleSubmit = () =>{
    console.log("user Logged in");
  }
  return (
    <>
      <h2>This is login page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          UserName
          <input type="text" name="userName" />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
