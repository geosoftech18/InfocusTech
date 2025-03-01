"use client";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import DropdownCTA from "./ui/dropdownCTA";
import Link from "next/link";
import Image from "next/image";

export interface DropDownCTAProps {
  heading: string;
  description: string;
  buttonLabel: string;
  buttonLink: string;
  bgImagePath: string;
}

interface NavLinkItemInterface {
  name: string;
  dropdownList?: string[];
  dropdownCTA?: DropDownCTAProps;
}

interface NavbarProps {
  fixed?:boolean
  NavbarProps: NavLinkItemInterface[];
}

const NavbarMain: React.FC<NavbarProps> = ({fixed ,NavbarProps }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <NavigationMenu  className={`${fixed?"fixed bg-white z-50 shadow-md":"bg-transparent"} py-4 max-w-screen-2xl transition-all duration-300`}>
      <NavigationMenuList className="flex items-center gap-2 md:gap-6">
        {/* Logo */}
        <NavigationMenuItem className="z-20">
          <div className={`text-black  font-extrabold text-2xl ${fixed?'':'bg-white p-2 rounded-md'}`}>
            <Image
              src={"/logo.png"}
              alt="Logo"
              height={1000}
              width={1000}
              className="h-10 w-40"
            />
          </div>
        </NavigationMenuItem>

        {/* Navigation Links */}
        {NavbarProps.map((link, index) => (
          <NavigationMenuItem key={index} className="relative group z-20" >
            {/* Normal Link */}
            {!link.dropdownList && (
              <NavigationMenuLink asChild>
                <Link
                  href={`/${link.name.toLowerCase().replace(/\s+/g, "")}`}
                  className={`block py-2  ${fixed?'text-black':'text-white'} text-xs md:text-sm font-semibold hover:text-red-600 transition`}
                >
                  {link.name}
                </Link>
              </NavigationMenuLink>
            )}

            {/* Dropdown Menu */}
            {link.dropdownList && (
              <>
                <NavigationMenuTrigger className={`font-semibold ${fixed?'text-black':'text-white'} text-xs md:text-sm bg-transparent hover:text-red-600 hover:bg-transparent transition duration-300`}>
                  {link.name}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 md:gap-5 w-[60vw] p-5">
                    {/* CTA Section (If Available) */}
                    {link.dropdownCTA && !isMobileMenuOpen && (
                      <DropdownCTA
                        heading={link.dropdownCTA.heading}
                        description={link.dropdownCTA.description}
                        buttonLabel={link.dropdownCTA.buttonLabel}
                        buttonLink={link.dropdownCTA.buttonLink}
                        bgImagePath={link.dropdownCTA.bgImagePath}
                      />
                    )}

                    {/* Dropdown Items */}
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-2 ${
                        link.dropdownCTA ? "col-span-1" : "col-span-2"
                      }`}
                    >
                      {link.dropdownList.map((label, idx) => (
                        <Link
                          key={idx}
                          href={`/${link.name}/${label.replace(/\s+/g, "")}`}
                          className="col-span-1 flex justify-center items-center p-2 shadow-md hover:scale-105 transition-all duration-500 w-full"
                        >
                          <span className="text-md w-full font-semibold">
                            {label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavbarMain;
