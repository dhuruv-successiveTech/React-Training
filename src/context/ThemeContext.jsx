"use client";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [currentLang, setCurrentLang] = useState("English");
  const languageConverter = () => {
    setCurrentLang((prevLang) =>
      prevLang === "English" ? "Spanish" : "English"
    );
  };
  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
        toggleTheme,
        currentLang,
        setCurrentLang,
        languageConverter,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
