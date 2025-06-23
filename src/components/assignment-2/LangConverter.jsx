"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";

const LangConverter = () => {
  const { currentLang, languageConverter } =
    useContext(LanguageContext);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <input type="text" placeholder={`${currentLang}`} />
      <button onClick={languageConverter}>
        {" "}
        {currentLang === "English"
          ? `Convert to Spanish`
          : `Convert to English`}
      </button>
      <input type="text" value={currentLang}/>
    </div>
  );
};

export default LangConverter;
