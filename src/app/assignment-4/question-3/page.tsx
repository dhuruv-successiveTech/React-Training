import Display from "./Display";

const DisplayPage = () => {
  return (
    <>
      <p className="question">
        Q3. Create a component with controlled input field and a button. When
        the user enters a specific value into the input (e.g., &quot;show&quot;), a new
        component should be rendered below the input, displaying a message.
        Otherwise, nothing should be displayed.
      </p>
      <Display />
    </>
  );
};

export default DisplayPage;
