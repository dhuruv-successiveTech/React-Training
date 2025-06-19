import "../globals.css";
import Link from "next/link";

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
        <Link href="/">
          <button style={style}>Home</button>
        </Link>
        <Link href="/assignment-2/question-1">
          <button style={style}>Question 1</button>
        </Link>
        <Link href="/assignment-2/question-2">
          <button style={style}>Question 2</button>
        </Link>
        {/* <Link href="/assignment-2/question-3">
            <button style={style}>Question 3</button>
          </Link> */}
        <Link href="/assignment-2/question-4">
          <button style={style}>Question 4</button>
        </Link>
        <Link href="/assignment-2/question-5">
          <button style={style}>Question 5</button>
        </Link>
        <Link href="/assignment-2/question-6">
          <button style={style}>Question 6</button>
        </Link>
        <Link href="/assignment-2/question-7">
          <button style={style}>Question 7</button>
        </Link>
        <Link href="/assignment-2/question-8">
          <button style={style}>Question 8</button>
        </Link>
      </div>
      {children}
    </>
  );
}
