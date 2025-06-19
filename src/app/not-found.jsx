import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        backgroundColor: "#f8f9fa",
        color: "#212529",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          padding: "3rem",
          borderRadius: "12px",
          backgroundColor: "white",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          border: "1px solid #e9ecef",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            marginBottom: "1rem",
            color: "#2b2d42",
            background: "linear-gradient(90deg, #ff4d4d, #f95738)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          404 - Page Not Found
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            marginBottom: "2rem",
            lineHeight: "1.6",
            color: "#495057",
          }}
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <button
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                color: "white",
                backgroundColor: "#4361ee",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
