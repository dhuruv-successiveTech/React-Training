import { Theme } from "@/components/assignment-2";

const ThemeSwitcher = () => {
  return (
    <>
      <p className="question">
        Q9. Create a theme switcher application using the useContext hook.
        Create a context to manage the current theme (e.g., light or dark).
        Provide a button to toggle between the two themes. Use the useContext
        hook to access the theme value and update it. Apply different styles and
        colors to components based on the selected theme.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        <Theme />
      </div>
    </>
  );
};

export default ThemeSwitcher;
