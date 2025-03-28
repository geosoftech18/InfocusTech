"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DropdownCTA from "./ui/dropdownCTA";
import { MapPin, Menu, Phone, X } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatePresence, motion } from "framer-motion";
import { Socials } from "./ui/socials";
import FooterData from "@/data/footer.json";
const FooterJSON = FooterData.FooterData;

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
  fixed?: boolean;
  NavbarProps: NavLinkItemInterface[];
}

const NavbarMain: React.FC<NavbarProps> = ({ fixed, NavbarProps }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <NavigationMenu
        className={`flex flex-col
          ${
            fixed ? "fixed bg-white z-50 shadow-md" : "bg-transparent"
          }  transition-all duration-300 hidden md:flex`}
      >
        <div
          className={`w-full px-40  flex flex-wrap items-center justify-between gap-4 p-4  ${"text-white bg-gray-900 "}`}
        >
          {/* Address Section */}
          <div className="flex items-center gap-3">
            <MapPin
              className={`w-6 h-6 ${
                fixed ? "text-[#b00d07]" : "text-[#b00d07]"
              }`}
            />
            <span className="text-sm font-medium">
              {FooterJSON.locations[0].addressLines}
            </span>
          </div>

          {/* Phone Section */}
          <div className="flex items-center gap-3">
            <Phone
              className={`w-6 h-6 ${
                fixed ? "text-[#b00d07]" : "text-[#b00d07]"
              }`}
            />
            <span className="text-sm font-medium">
              {FooterJSON.locations[0].phone}
            </span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center gap-4 w-1/4">
            <Socials
              socials={FooterData.FooterData.socials}
              iconColour="text-[#B00D07]"
            />
          </div>
        </div>

        <NavigationMenuList className=" items-center gap-2 lg:gap-10 py-4">
          {/* Logo */}
          <NavigationMenuItem className="z-20">
            <div
              className={`text-black  font-extrabold text-2xl ${
                fixed ? "" : "bg-white p-2 rounded-md"
              }`}
            >
              <Link href={"/"}>
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  height={1000}
                  width={1000}
                  className="h-5 xl:h-10 w-20 xl:w-40 "
                />
              </Link>
            </div>
          </NavigationMenuItem>

          {/* Navigation Links */}
          {NavbarProps.map((link, index) => (
            <NavigationMenuItem key={index} className="relative group z-20">
              {/* Normal Link */}
              {!link.dropdownList && (
                <NavigationMenuLink asChild>
                  
                  <Link
                    href={`/${link.name.toLowerCase().replace(/\s+/g, "")}`}
                    className={`block py-2  ${
                      fixed ? "text-black" : "text-white"
                    } text-xs xl:text-sm font-semibold hover:text-red-600 transition`}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuLink>
              )}

              {/* Dropdown Menu */}
              {link.dropdownList && (
                <>
                  <NavigationMenuTrigger
                    className={`font-semibold ${
                      fixed ? "text-black" : "text-white"
                    } text-xs xl:text-sm bg-transparent px-1 hover:text-red-600 hover:bg-transparent transition duration-300`}
                  >
                    {link.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-5 w-[60vw] p-5">
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
                            <span className="text-xs xl:text-sm  w-full font-semibold">
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
      {/* Mobile Menu*/}
      <NavigationMenu
        className={`flex md:hidden flex-col ${
          fixed ? "fixed top-0 bg-white" : "bg-transparent"
        }  text-gray-300 py-4`}
      >
        <div className="flex items-center justify-between px-2 w-full">
          <div
            className={`text-black  ${
              fixed ? "" : "bg-white p-2 rounded-md"
            } font-extrabold text-2xl mx-2 rounded-md left-0 top-0`}
          >
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="Logo"
                height={1000}
                width={1000}
                className={`h-7 xl:h-10 w-28 xl:w-40 `}
              />
            </Link>
          </div>

          <button
            className="md:hidden  z-30 text-black "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                size={28}
                className="bg-[#b00d07] text-white rounded-md  p-1"
              />
            ) : (
              <Menu
                size={28}
                className="bg-gray-400 rounded-md bg-opacity-50 p-1"
              />
            )}
          </button>
        </div>
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="shadow-none border-none bg-gray-900 w-full"
              initial={{ opacity: 0, height: 0 }} // Start slightly above
              animate={{ opacity: 1, height: "auto" }} // Move down to normal position
              exit={{ opacity: 0, height: 0 }} // Move up when closing
              transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
            >
              <div
                className={` rounded-b-lg w-full transition-all duration-300
        opacity-100 flex flex-col items-center`}
              >
                <NavigationMenuList className="flex flex-col gap-2">
                  {/* Logo */}

                  {/* Navigation Links */}
                  {NavbarProps.map((link, index) => (
                    <NavigationMenuItem
                      key={index}
                      className="relative group z-20"
                    >
                      {/* Normal Link */}
                      {!link.dropdownList && (
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/${link.name
                              .toLowerCase()
                              .replace(/\s+/g, "")}`}
                            className={`block py-2 text-sm font-semibold hover:text-red-600 transition`}
                          >
                            {link.name}
                          </Link>
                        </NavigationMenuLink>
                      )}

                      {/* Dropdown Menu */}
                      {link.dropdownList && (
                        <Accordion type="single" collapsible>
                          <AccordionItem
                            value="item-1 "
                            className="border-none"
                          >
                            <AccordionTrigger className="py-2 text-sm font-semibold hover:text-red-600 transition ">
                              {link.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-5 w-full md:w-[60vw] p-5">
                                {/* CTA Section (If Available) */}
                                {/* {link.dropdownCTA && (
                                  <DropdownCTA
                                    heading={link.dropdownCTA.heading}
                                    description={link.dropdownCTA.description}
                                    buttonLabel={link.dropdownCTA.buttonLabel}
                                    buttonLink={link.dropdownCTA.buttonLink}
                                    bgImagePath={link.dropdownCTA.bgImagePath}
                                  />
                                )} */}

                                {/* Dropdown Items */}
                                <div
                                  className={`grid grid-cols-2 lg:grid-cols-2 gap-2 ${
                                    link.dropdownCTA
                                      ? "col-span-1"
                                      : "col-span-2"
                                  }`}
                                >
                                  {link.dropdownList.map((label, idx) => (
                                    <Link
                                      key={idx}
                                      href={`/${link.name}/${label.replace(
                                        /\s+/g,
                                        ""
                                      )}`}
                                      className="col-span-1 flex justify-center items-center p-2 shadow-md hover:scale-105 transition-all duration-500 w-full"
                                    >
                                      <span className="text-xs xl:text-sm  w-full font-semibold">
                                        {label}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </NavigationMenu>
    </>
  );
};

export default NavbarMain;
