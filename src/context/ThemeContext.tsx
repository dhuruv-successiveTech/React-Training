"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ThemeProps {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeProps | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
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

export const useTheme = ():ThemeProps=>{
  const context = useContext(ThemeContext);
  if(!context){
    throw new Error ("Theme context not found")
  }
  return context;
}