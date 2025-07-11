import UserInput from "./UserInput";

const Page = () => {
  return (
    <>
      <p className="question">
        Q1. Create a React component with an input field. Implement it as a
        controlled component where the input value is controlled by the
        component&apos;s state. When the user types into the input field, the
        component&apos;s state should update accordingly.
      </p>
      <UserInput />
    </>
  );
};

export default Page;
