import PasswordValidation from "./PasswordValidation";

const DisplayPage = () => {
  return (
    <>
      <p className="question">
        Q4. Build a registration form with two password fields. Implement
        controlled components for both password inputs. Add a validation rule to
        ensure that the two passwords match before allowing the form submission.
      </p>
      <PasswordValidation />
    </>
  );
};

export default DisplayPage;
