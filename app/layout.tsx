
import Animation from "@/components/animation";
import Container from "@/components/container";
import Footer from "@/components/footer";
import FooterData from "@/data/footer.json";
import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "InfocusTech",
  description: "InfocusTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  const FooterJSON=FooterData.FooterData

  
  return (
    <html lang="en">
      <body>
        <Container>
          
          {/* <AnimationProvider> */}
          {/* <NavbarMain fixed={true} NavbarProps={navLinks} /> */}
          {/* </AnimationProvider> */}
          <Animation/>
          {children}
          <Footer FooterData={FooterJSON}/>
        </Container>
      </body>
    </html>
  );
}
