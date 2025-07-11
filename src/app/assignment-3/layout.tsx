import { ReactNode } from "react";
import "../globals.css";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  const data = Array.from({ length: 6 }, (_, i) => ({
    link: `/assignment-3/question-${i + 1}`,
    text: `Question ${i + 1}`,
  }));

  return (
    <>
      <div
        style={{
          overflowX: "scroll",
          marginInline: "auto",
          display: "flex",
          gap: "10px",
        }}
      >
        <Link href={"/"}>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              fontSize: "0.8rem",
              padding: "10px",
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
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                fontSize: "0.8rem",
                padding: "10px",
                margin: "0.1rem",
                cursor: "pointer",
                border: "none",
                borderRadius: "9px",
              }}
            >
              {item.text}
            </button>
          </Link>
        ))}
      </div>
      {children}
    </>
  );
}
