"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const LangConverter = () => {
  const { currentLang, languageConverter, setConvertedLang } =
    useContext(ThemeContext);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <input type="text" placeholder={`${currentLang}`} />
      <button onClick={languageConverter}>
        {" "}
        {currentLang === "English"
          ? `Convert to Spanish`
          : `Convert to English`}
      </button>
      <input type="text" />
      <h1>{currentLang}</h1>
    </div>
  );
};

export default LangConverter;
