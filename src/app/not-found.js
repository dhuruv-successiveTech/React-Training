// pages/404.js
import Link from "next/link";

const Custom404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f7f7f7",
        color: "#333",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "100px",
            fontWeight: "bold",
            color: "#ff6f61",
          }}
        >
          404
        </h1>
        <p
          style={{
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          style={{
            display: "inline-block",
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#0070f3",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "18px",
            transition: "background-color 0.2s ease",
          }}
          href="/"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
