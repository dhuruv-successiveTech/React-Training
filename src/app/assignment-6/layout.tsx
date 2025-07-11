import { CSSProperties, ReactNode } from "react";
import "../globals.css";
import Link from "next/link";

export default function RootLayout({ children }:{children:ReactNode}) {
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
  const wrapperStyle : CSSProperties= {
    overflowX: "scroll",
    marginInline: "auto",
    display: "flex",
    gap: "10px", // space between the buttons
  };

  const data = Array.from({ length: 5 }, (_, i) => ({
    link: `/assignment-6/question-${i + 1}`,
    text: `Question ${i + 1}`,
  }));

  return (
    <>
      <div style={wrapperStyle}>
        <Link href={"/"}>
          <button
            style={buttonStyle}
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
      {children}
    </>
  );
}
