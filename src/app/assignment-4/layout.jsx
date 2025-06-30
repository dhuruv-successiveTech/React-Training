import Sidebar from "@/components/assignment-4/SideBar";

export default function RootLayout({ children }) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
