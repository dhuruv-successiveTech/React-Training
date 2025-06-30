import { FormikForm } from "@/components/assignment-4";

const FormPage = () => {
  return (
    <>
      <p className="question">
        Q13. install Yup. Define a Yup validation schema for a more complex
        form. Include validation rules for fields like email, password, and
        phone number. Ensure that error messages are displayed for each
        validation rule. Implement real-time validation feedback using
        Material-UI's TextField component. Show validation errors as the user
        types, and clear the errors when the input is valid.(Use Formik as well)
      </p>
      <FormikForm />
    </>
  );
};

export default FormPage;
