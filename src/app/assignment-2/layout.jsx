import ThemeProvider from "@/context/ThemeContext";
import "../globals.css";
import Link from "next/link";
import data from "./data";

export default function RootLayout({ children }) {
  const style = {
    backgroundColor: "blue ",
    color: "white",
    fontSize: "0.8rem",
    padding: 10,
    cursor: "pointer",
    border: "none",
    borderRadius: "9px",
  };
  return (
    <>
      <div className="link">
        {data.map((item,index) => (
          <Link key={index} href={item.link}>
            <button style={style}>{item.text}</button>
          </Link>
        ))}
      </div>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
}
