
import type { Metadata } from "next";
import "./globals.css";
import NavbarMain from "@/components/navbar";
import navLinksData from "@/data/navbar.json";
import Container from "@/components/container";
import { usePathname } from "next/navigation";
import Animation from "@/components/animation";
import Footer from "@/components/footer";
import {FooterData} from "@/data/footer.json"



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
        <Container>
          
          {/* <AnimationProvider> */}
          {/* <NavbarMain fixed={true} NavbarProps={navLinks} /> */}
          {/* </AnimationProvider> */}
          <Animation/>
          {children}
          <Footer FooterData={FooterData}/>
        </Container>
      </body>
    </html>
  );
}
