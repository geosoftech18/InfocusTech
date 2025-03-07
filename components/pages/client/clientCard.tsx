import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import Image from "next/image";

interface ClientCardProps {
  imagePath: string;
  name: string;
  title: string;
  description: string;
  hovered: boolean;
  index: number;
  setHovered: (hovered: number | null) => void;
  isSmallScreen: boolean;
}

const ClientCard: React.FC<ClientCardProps> = ({
  hovered,
  imagePath,
  setHovered,
  name,
  title,
  description,
  index,
  isSmallScreen,
}) => {
  return (
    <Card
      className="relative flex flex-col items-center justify-center md:p-6 bg-white shadow-lg rounded-2xl transition-transform duration-1000 hover:scale-105 col-span-1"
      onMouseEnter={() => isSmallScreen && setHovered(index)}
      onMouseLeave={() => isSmallScreen && setHovered(null)}
    >
      {/* Image */}
      <Image
        src={imagePath}
        alt={name}
        height={100}
        width={100}
        className="w-full aspect-video"
      />

      {/* Name */}
      <div className={`flex w-full ${isSmallScreen? 'flex-col justify-start ' : 'flex-row justify-center text-center' } items-center px-1`}>
        <div className={`flex flex-col ${isSmallScreen? 'items-center gap-2':'items-start'} w-11/12`}>
          <CardTitle className="text-sm md:text-lg font-semibold text-gray-800">
            {name}
          </CardTitle>

          {/* Title */}
          <p className="text-xs md:text-sm text-gray-600 mt-1 font-medium">
            {title}
          </p>
        </div>
        {/* <div className="w-full flex justify-end mt-2"> */}
        {hovered ? (
          <ChevronsUp
            onClick={() => {
              setHovered(null);
            }}
            className="h-5 w-1/12 md:h-10 md:w-1/12"
          />
        ) : (
          <ChevronsDown
            onClick={() => {
              setHovered(index);
            }}
            className="h-5 w-1/12 md:h-10 md:w-1/12"
          />
        )}
      </div>
      {/* </div> */}

      {/* Description */}
      
      <CardDescription
        className={`mt-2 text-xs md:text-sm text-center p-1 text-gray-500 transition-opacity duration-100 ${
          hovered ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        {description}
      </CardDescription>
    </Card>
  );
};

export default ClientCard;
