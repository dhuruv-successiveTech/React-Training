import { ThemeProvider } from "@/context";
import "../globals.css";
import Link from "next/link";
import { CartProvider } from "@/context";
import { LanguageProvider } from "@/context";
import { CSSProperties, ReactNode } from "react";

export default function RootLayout({ children }:{children:ReactNode}) {
  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "0.8rem",
    padding: "10px",
    margin: "0.1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "9px",
  };

  const wrapperStyle:CSSProperties = {
    overflowX: "scroll",
    marginInline: "auto",
    display: "flex",
    gap: "10px", 
  };
  const data = Array.from({ length: 19 }, (_, i) => ({
    link: `/assignment-2/question-${i + 1}`,
    text: `Question ${i + 1}`,
  }));
  return (
    <>
    
      <div style={wrapperStyle}>

        <Link href={"/"}>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              fontSize: "0.8rem",
              padding: "16px",
              margin: "0.1rem",
              cursor: "pointer",
              border: "none",
              borderRadius: "9px",
            }}
          >
            Home
          </button>
        </Link>
        {data.map((item, index) => (
          <Link key={index} href={item.link}>
            <button style={buttonStyle}>{item.text}</button>
          </Link>
        ))}
      </div>
      <ThemeProvider>
        <CartProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
