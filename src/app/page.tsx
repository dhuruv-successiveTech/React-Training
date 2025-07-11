import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
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
  const data = Array.from({ length: 6 }, (_, i) => ({
    link: `/assignment-${i + 1}`,
    text: `Assignment ${i + 1}`,
  }));
  return (
    <>
      {data.map((item, index) => (
        <Link key={index} href={item.link}>
          <button style={buttonStyle}>{item.text}</button>
        </Link>
      ))}
      <h1
        style={{
          margin: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
        }}
      >
        Welcome To Assignments
      </h1>
    </>
  );
}
