
import Animation from "@/components/animation";
import Container from "@/components/container";
import Footer from "@/components/footer";
import FooterData from "@/data/footer.json";
import type { Metadata } from "next";
import "./globals.css";
import { getHomePageGQL } from "@/lib/graphql/extractHomepageGQL";
import ScrollToTopButton from "@/components/ui/uptotop";



export const metadata: Metadata = {
  title: "InfocusTech",
  description: "InfocusTech",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  const FooterJSON=FooterData.FooterData
  const homepageData = await getHomePageGQL();

  if (!homepageData) return;

  const {heroData} = homepageData
  // console.log(heroItems)
  return (
    <html lang="en">
      <body>
        <Container>
          
          {/* <AnimationProvider> */}
          {/* <NavbarMain fixed={true} NavbarProps={navLinks} /> */}
          {/* </AnimationProvider> */}
          <Animation heroItems={heroData}/>
          {children}
          <Footer FooterData={FooterJSON}/>
          <ScrollToTopButton/>
        </Container>
      </body>
    </html>
  );
}
