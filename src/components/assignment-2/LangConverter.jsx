"use client";

import { LanguageContext } from "@/context/LanguageContext";
import { useContext } from "react";



const LangConverter = () => {
  const { currentLang, languageConverter } = useContext(LanguageContext);

  return (
    <div style={{ width: "100%",marginInline:"auto", height: "100%" }}>
      <h1>{currentLang === "English" ? "Welcome to our application!" : "¡Bienvenido a nuestra aplicación!"}</h1>
      <p>
        {currentLang === "English"
          ? "This is a language switcher application."
          : "Esta es una aplicación para cambiar de idioma."}
      </p>

      <button onClick={languageConverter}>
        {currentLang === "English" ? "Switch to Spanish" : "Cambiar a inglés(Switch to English)"}
      </button>
    </div>
  );
};

export default LangConverter;
