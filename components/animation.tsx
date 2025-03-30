"use client";
import animationDataWhite from "@/animations/background-animation-white.json";
import HeroCarousal from "@/components/pages/home/heroCarousal";
import navLinksData from "@/data/navbar.json";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavbarMain from "./navbar";
import { FilterXIcon } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Animation = ({heroItems}:{heroItems:any}) => {
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

  return (
    <>
      {isHomePage  && (
        <div className="relative h-screen w-full mb-20">
          {/* <Lottie
            animationData={animationDataWhite}
            loop={true}
            autoplay={true}
            width={2908}
            height={1600}
            className="absolute object-contain z-0"
          /> */}

         
          <HeroCarousal fixed={isSticky} navLinks={navLinks} HeroItems={heroItems} />
        </div>
      )}
      {!isHomePage  && (
        <div className="pb-20 md:pb-32">
          <NavbarMain fixed={true} NavbarProps={navLinks} />
        </div>
      )}
    </>
  );
};

export default Animation;
