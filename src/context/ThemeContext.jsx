"use client";
import { createContext,useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
