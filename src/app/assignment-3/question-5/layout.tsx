import { AuthProvider } from "@/components/assignment-3/AuthContext";
import Link from "next/link";
import { ReactNode } from "react";

export default function DashboardLayout({ children }:{children:ReactNode}) {
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          width: "300px",
          padding: "1rem",
          borderRight: "1px solid #ccc",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/assignment-3/question-5">Dashboard</Link>
          </li>
          <li>
            <Link href="/assignment-3/question-5/Profile">Profile</Link>
          </li>
          <li>
            <Link href="/assignment-3/question-5/Settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <main style={{ padding: "1rem", flexGrow: 1 }}>
        <AuthProvider>{children}</AuthProvider>
      </main>
    </div>
  );
}
