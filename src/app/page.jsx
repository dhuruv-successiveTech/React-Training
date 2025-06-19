import Link from "next/link";

export default function Home() {
  const style = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "0.8rem",
    padding: 10,
    cursor: "pointer",
    border: "none",
    borderRadius: "9px",
  };
  return (
    <h1
      style={{
        margin: "1rem",
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        gap: "0.5rem",
        justifyContent: "center",
      }}
    >

      Welcome To Assignments
    </h1>
  );
}
