import FormPage from "./FormPage";

const Form = () => {
  return (
    <>
      <p className="question">
        Q14. Create a new form and Implement form submission handling. Ensure
        that the form cannot be submitted if there are validation errors.
        Display a summary of errors if the user attempts to submit an invalid
        form.
      </p>
      <FormPage/>
    </>
  );
};

export default Form;
