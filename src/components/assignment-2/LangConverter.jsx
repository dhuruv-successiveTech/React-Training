"use client";

import { LanguageContext } from "@/context";
import { useContext } from "react";

const LangConverter = () => {
  const { currentLang, languageConverter } = useContext(LanguageContext);

  return (
    <div
      style={{
        width: "100%",
        marginInline: "auto",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          color: "#333",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {currentLang === "English"
          ? "Welcome to our application!"
          : "¡Bienvenido a nuestra aplicación!"}
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#555",
          textAlign: "center",
          marginBottom: "20px",
          maxWidth: "600px",
        }}
      >
        {currentLang === "English"
          ? "This is a language switcher application."
          : "Esta es una aplicación para cambiar de idioma."}
      </p>

      <button
        onClick={languageConverter}
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        {currentLang === "English"
          ? "Switch to Spanish"
          : "Cambiar a inglés(Switch to English)"}
      </button>
    </div>
  );
};

export default LangConverter;
