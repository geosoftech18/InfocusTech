export interface FooterLocation {
  title: string;
  addressLines: string[];
  phone: string;
  email: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

/** Represents an accreditation badge (e.g., "Microsoft Partner"). */
export interface FooterAccreditation {
  label: string;
  imageUrl: string;
  href?: string;
}

export interface FooterSocials {
  Linkedin: string;
  Facebook: string;
  Twitter: string;
  google: string;
}

/** Props for the entire Footer component. */
export interface FooterProps {
  FooterData: {
    /** Brand or company name (used in the copyright). */
    brandName: string;
    /** Array of office locations. */
    locations: FooterLocation[];
    /** Columns of links (e.g., Company, Services, Expertise). */
    columns: FooterColumn[];
    /** Accreditation badges. */
    accreditation: FooterAccreditation[];
    /** Link to your Privacy Policy. */
    privacyPolicyLink: string;
    /** Overwrite default copyright text (optional). */
    copyrightText?: string;

    socials: FooterSocials;
  };
}

// Footer.tsx
import React from "react";
import Image from "next/image"; // or regular <img> if not in Next.js
import { Facebook, Linkedin, Search, Twitter } from "lucide-react";
import Link from "next/link";
import { Socials } from "./ui/socials";
import CenteredLink from "./ui/slidingUnderline";
import UnderlineAnimation from "./ui/slidingUnderline";

const Footer: React.FC<FooterProps> = ({ FooterData }) => {
  const {
    brandName,
    locations,
    columns,
    accreditation,
    privacyPolicyLink,
    copyrightText,
    socials,
  } = FooterData;
  return (
    <footer className="bg-gray-900 bg-[url('/vectors/gray-neural-network-illustration/78766-removebg-preview.png)] text-gray-300 px-4 py-8 mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Top section: Locations + Columns + Accreditation */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* 1) Locations (India, Dubai, etc.) */}
          <div className="space-y-6 lg:col-span-1">
            {locations.map((loc, i) => (
              <LocationBlock key={i} location={loc} />
            ))}
            <div className="hidden md:block pr-10">
              <Socials socials={socials} />
            </div>
          </div>

          {/* 2) Footer Columns (Company, Services, Expertise, etc.) */}
          {columns.map((col, index) => (
            <FooterColumnBlock key={index} column={col} />
          ))}

          {/* 3) Accreditation */}
          <div className="col-span-2 md:col-span-1 mt-4 lg:mt-0">
            <h3 className="text-lg font-semibold mb-2 flex items-center justify-center">
              Accreditation
            </h3>
            <div className=" grid grid-cols-2 gap-2">
              {accreditation.map((acc, idx) => (
                <a
                  key={idx}
                  href={acc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start justify-center gap-2 col-span-1"
                >
                  <Image
                    src={acc.imageUrl}
                    alt={acc.label}
                    width={120}
                    height={40}
                    className="object-contain rounded-lg"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden block px-10 pt-10">
          <Socials socials={socials}  />
        </div>

        {/* Bottom section: Copyright + Privacy Policy */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center justify-center  gap-2">
            <p className="text-sm text-gray-400">
              {copyrightText
                ? copyrightText
                : `© ${new Date().getFullYear()} ${brandName} All rights reserved.`}
            </p>

            {/* <p className="text-xs text-gray-400">
              {"Development by "}
              <Link
                href={"https://www.geosoftech.com/"}
                className="hover:underline"
              >
                {" "}
                GEOSoftech.
              </Link>
            </p> */}
          </div>
          <a
            href={privacyPolicyLink}
            className="text-sm text-gray-400 hover:underline"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const LocationBlock: React.FC<{ location: FooterLocation }> = ({
  location,
}) => {
  const { title, addressLines, phone, email } = location;

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {addressLines.map((line, idx) => (
        <p key={idx} className="text-sm leading-5">
          {line}
        </p>
      ))}
      <p className="text-sm mt-2">
        <span className="font-semibold">Phone:</span> {phone}
      </p>
      <p className="text-sm">
        <span className="font-semibold">Email:</span> {email}
      </p>
    </div>
  );
};

/** Single column of links (e.g., "Company", "Services"). */
const FooterColumnBlock: React.FC<{ column: FooterColumn }> = ({ column }) => {
  const { title, links } = column;
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="space-y-1">
        {links.map((link, index) => (
          <li key={index}>
            <UnderlineAnimation colour="white">
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:font-bold hover:text-white"
              >
                {link.label}
              </Link>
            </UnderlineAnimation>
          </li>
        ))}
      </ul>
    </div>
  );
};
