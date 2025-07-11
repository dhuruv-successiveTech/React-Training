import Sidebar from "@/components/assignment-4/SideBar";
import { ReactNode } from "react";

export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
