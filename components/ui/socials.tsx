"use client";
import Link from "next/link";
import { FooterSocials } from "../footer";
import { Facebook, Linkedin, Mail, Search, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

interface SocialInterface {
  socials: FooterSocials;
}

const socialIcons = [
  { icon: <Linkedin />, color: "blue-600", hoverColor: "white" },
  { icon: <Twitter />, color: "blue-600", hoverColor: "white" },
  { icon: <Facebook />, color: "blue-500", hoverColor: "white" },
  { icon: <Mail />, color: "red-500", hoverColor: "white" },
];



export const Socials: React.FC<SocialInterface> = ({ socials}) => {

  const key = Object.values(socials)
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex gap-4">
        {socialIcons.map(({ icon, color, hoverColor }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-lg bg-white shadow-sm border text-${color} hover:bg-${color} hover:text-${hoverColor} transition-colors`}
          >
            <Link href={key[index]}>{React.cloneElement(icon, { className: "w-5 h-5" })}</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
