import ThemeProvider from "@/context/ThemeContext";
import "../globals.css";
import Link from "next/link";
import data from "./data";
import CartProvider from "@/context/CartContext";
import LanguageProvider from "@/context/LanguageContext";

export default function RootLayout({ children }) {
  // Define the common button styles as a reusable style object
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

  // Define the wrapper styles
  const wrapperStyle = {
    overflowX: "scroll",
    marginInline: "auto",
    display: "flex",
    gap: "10px", // space between the buttons
  };

  return (
    <>
      <div style={wrapperStyle}>
        {data.map((item, index) => (
          <Link key={index} href={item.link}>
            <button style={buttonStyle}>{item.text}</button>
          </Link>
        ))}
      </div>
      <ThemeProvider>
        <CartProvider><LanguageProvider>{children}</LanguageProvider></CartProvider>
      </ThemeProvider>
    </>
  );
}
