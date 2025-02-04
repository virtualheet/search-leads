'use client'

import Navbar from "@/components/Navbar";
import "./globals.css";
// using pathname make for /example navbar is disabled
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isExamplePage = pathname === "/example";

  return (
    <html lang="en">
      <body
        className={` bg-[#FEF9F2] scrollbar-none antialiased`}
      >
        {!isExamplePage && <Navbar credits={6500} />}
        {children}
      </body>
    </html>
  );
}
