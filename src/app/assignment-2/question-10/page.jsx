import {LangConverter} from "@/components/assignment-2";

const LanguageConverter = () => {
  return (
    <>
      <p className="question">
        Q10. Develop a language switcher application using the useContext hook.
        Create a context to manage the current language (e.g., English or
        Spanish). Provide buttons to switch between languages. Use the
        useContext hook to access the current language value. Display different
        language versions of the application's content.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <LangConverter />
      </div>
    </>
  );
};

export default LanguageConverter;
