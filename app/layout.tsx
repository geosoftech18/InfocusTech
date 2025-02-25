import type { Metadata } from "next";
import "./globals.css";
import NavbarMain from "@/components/navbar";
import navLinksData from "@/data/navbar.json";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "InfocusTech",
  description: "InfocusTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = navLinksData.navLinks;
  return (
    <html lang="en">
      <body>
        <div>
          <NavbarMain NavbarProps={navLinks} />
          {children}
        </div>
      </body>
    </html>
  );
}
