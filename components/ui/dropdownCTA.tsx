
import React from "react";
import { DropDownCTAProps } from "../navbar";
import { Button } from "./button";
import Link from "next/link";

const DropdownCTA: React.FC<DropDownCTAProps> = ({
  heading,
  description,
  buttonLabel,
  bgImagePath,
}) => {
  return (
    <div className="relative bg-cover bg-center  rounded-lg shadow-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImagePath}')`,
          opacity: 0.3,
        }}
        aria-hidden="true"
      />
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-around bg-black h-full bg-opacity-50 text-white p-4 rounded-md text-center">
        <h2 className="text-lg xl:text-xl font-bold mb-4">{heading}</h2>
        <p className="text-xs xl:text-sm mb-6 text-wrap">{description}</p>
        <Link href={"/contactus"}>
        <Button variant={"default"} size={"lg"} className="w-full text-xs xl:text-sm">
          {buttonLabel}
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default DropdownCTA;
