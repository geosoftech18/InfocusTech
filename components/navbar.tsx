"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/common/navbar";
import {
  Dropdown,
  DropdownButton,
  DropdownMenu,
} from "@/components/common/dropdown";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
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
  NavbarProps: NavLinkItemInterface[];
}

// const navLinks: NavLinkItemInterface[] = [
//   { name: "Home" },
//   {
//     name: "Services",
//     dropdownList: ["Product Engineering", "Cloud", "DevOps", "Salesforce"],
//     dropdownCTA: {
//       heading: "Discover a New Era of Digital Transformation",
//       description:
//         "We turn your boldest technological ideas into end-to-end solutions. Want to be on our list of Happy Clients?",
//       buttonLabel: "Let's find out",
//       buttonLink: "/aboutus",
//       bgImagePath: "/peopleworking.png",
//     },
//   },
//   {
//     name: "Expertise",
//     dropdownList: ["Microsoft", "Frontend", "OpenSource"],
//     dropdownCTA: {
//       heading: "Let's Build Something Together",
//       description:
//         "Create your own agile squad with experienced members just like your local team.",
//       buttonLabel: "Contact Us",
//       buttonLink: "/contactus",
//       bgImagePath: "/peopleworking.png",
//     },
//   },
//   {
//     name: "Company",
//     dropdownList: ["AboutUs", "Careers"],
//   },
//   { name: "Contact Us" },
// ];

const NavbarMain: React.FC<NavbarProps> = ({ NavbarProps}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar className="px-6 lg:px-32 basis- border-b-2 ">
      {/* Logo */}
      <button
        className="lg:hidden block"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-8 w-8 text-gray-900" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-gray-900" />
        )}
      </button>
      <NavbarLabel className="text-black font-extrabold text-2xl">
        <Image src={"/logo.jpeg"} alt="" height={1000} width={1000} className="h-10 w-40"/>
      </NavbarLabel>
      {/* <NavbarDivider /> */}

      {/* Mobile Menu Button */}

      {/* Desktop Navbar */}
      <NavbarSpacer />
      <NavbarSection
        className={`lg:flex items-center space-x-2 ${
          isMobileMenuOpen
            ? "absolute flex flex-col top-16 left-0 w-full bg-white p-5 shadow-sm z-50"
            : "hidden lg:flex"
        }`}
      >
        {NavbarProps.map((link, index) => (
          <NavbarItem key={index} className="relative group">
            {!link.dropdownList && (
              <a
                href={`/${link.name.toLowerCase().replace(/\s+/g, "")}`}
                className="block py-2 text-sm font-semibold hover:text-red-600 transition"
              >
                {link.name}
              </a>
            )}

            {link.dropdownList && (
              <Dropdown>
                <DropdownButton as={NavbarItem} aria-label="Account menu">
                  <NavbarLabel>{link.name}</NavbarLabel>
                  <ChevronDownIcon className="h-5 text-black w-5" />
                </DropdownButton>

                {/* Dropdown Menu */}
                <DropdownMenu anchor="bottom" className="w-full  bg-white z-50">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 max-w-4xl">
                    {link.dropdownCTA && !isMobileMenuOpen && (
                      <DropdownCTA
                        heading={link.dropdownCTA.heading}
                        description={link.dropdownCTA.description}
                        buttonLabel={link.dropdownCTA.buttonLabel}
                        buttonLink={link.dropdownCTA.buttonLink}
                        bgImagePath={link.dropdownCTA.bgImagePath}
                      />
                    )}
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-2 gap-2   ${
                        link.dropdownCTA ? "col-span-1" : "col-span-2"
                      }  `}
                    >
                      {link.dropdownList.map((label, index) => (
                        <Link
                          className=" col-span-1 flex justify-center items-center p-2 shadow-md rounded-md hover:scale-105 transition-all duration-500 w-full"
                          href={`/${label}`}
                          key={index}
                        >
                          <span className="text-md w-full font-semibold">
                            {label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </DropdownMenu>
              </Dropdown>
            )}
          </NavbarItem>
        ))}
      </NavbarSection>
    </Navbar>
  );
};

export default NavbarMain;
