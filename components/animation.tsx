"use client";
import animationDataWhite from "@/animations/background-animation-white.json";
import HeroCarousal from "@/components/pages/home/heroCarousal";
import HeroData from "@/data/hero.json";
import navLinksData from "@/data/navbar.json";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarMain from "./navbar";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Animation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // console.log(window.innerWidth)
      setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const navLinks = navLinksData.navLinks;
  const HeroItems = HeroData.HeroData;

  // if (isMobile) {
  
  //   return <>
  //     {isHomePage && (
  //       <div className="relative h-screen bg-[#b00d07]">
  //       <Lottie
  //         animationData={animationDataWhite}
  //         loop={true}
  //         autoplay={true}
  //         width={2908}
  //         height={1600}
  //         className="absolute object-contain z-0"
  //       />

  //       <NavbarMain fixed={false} NavbarProps={navLinks} />

  //       <HeroCarousal HeroItems={HeroItems} />
  //     </div>
  //     )}

  //     {!isHomePage}
  //   </>
  // }

  return (
    <>
      {isHomePage  && (
        <div className="relative h-[75vh] md:h-screen bg-[#b00d07]">
          <Lottie
            animationData={animationDataWhite}
            loop={true}
            autoplay={true}
            width={2908}
            height={1600}
            className="absolute object-contain z-0"
          />

          <NavbarMain fixed={isSticky} NavbarProps={navLinks} />

          <HeroCarousal HeroItems={HeroItems} />
        </div>
      )}
      {!isHomePage  && (
        <div className="md:pb-20">
          <NavbarMain fixed={true} NavbarProps={navLinks} />
        </div>
      )}
    </>
  );
};

export default Animation;
