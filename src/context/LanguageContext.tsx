"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface LanguageContextProps {
  currentLang: string;
  setCurrentLang: Dispatch<SetStateAction<string>>;
  languageConverter: () => void;
}
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLang, setCurrentLang] = useState<string>("English");

  const languageConverter = () => {
    setCurrentLang((prev) => (prev === "English" ? "Spanish" : "English"));
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setCurrentLang,
        languageConverter,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export const useLangluageContext = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("Context ot found");
  }
  return context;
};
