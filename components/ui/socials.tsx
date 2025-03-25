import Link from "next/link";
import { FooterSocials } from "../footer";
import { Facebook, Linkedin, Search, Twitter } from "lucide-react";

interface SocialInterface{
    socials:FooterSocials,
    iconColour?:string
}

export const Socials: React.FC<SocialInterface> = ({socials,iconColour}) => {
    return (
      <div className="flex items-center justify-between w-full">
        <Link href={socials.Facebook}>
          <Facebook  className={`h-5 w-5 hover:scale-150  ${iconColour} transition-transform duration-300 `} />
        </Link>
        <Link href={socials.Linkedin}>
          <Linkedin  className={`h-5 w-5 hover:scale-150  ${iconColour} transition-transform duration-300`} />
        </Link>
        <Link href={socials.Twitter}>
          <Twitter  className={`h-5 w-5 hover:scale-150 ${iconColour} transition-transform duration-300`} />
        </Link>
        <Link href={socials.google}>
          <Search  className={`h-5 w-5 hover:scale-150 ${iconColour} transition-transform duration-300`} />
        </Link>
      </div>
    );
  };
  