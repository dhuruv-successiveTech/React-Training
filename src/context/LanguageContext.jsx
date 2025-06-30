"use client";
import { createContext, useState } from "react";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLang, SetCurrentLang] = useState("English");

  const languageConverter = () => {
    SetCurrentLang((prev) => (prev === "English" ? "Spanish" : "English"));
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        SetCurrentLang,
        languageConverter,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
