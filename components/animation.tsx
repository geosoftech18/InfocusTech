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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const navLinks = navLinksData.navLinks;
  const HeroItems = HeroData.HeroData;
  return (
    <>
      {isHomePage && (
        <div className="relative h-screen bg-[#b00d07] ">
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
      {!isHomePage && (
        <div className="pb-20">
          <NavbarMain fixed={true} NavbarProps={navLinks} />
        </div>
      )}
    </>
  );
};

export default Animation;
