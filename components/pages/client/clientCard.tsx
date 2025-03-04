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
  isSmallScreen:boolean
}

const ClientCard: React.FC<ClientCardProps> = ({
  hovered,
  imagePath,
  setHovered,
  name,
  title,
  description,
  index,
  isSmallScreen
}) => {

 

  return (
    <Card
      className="relative flex flex-col items-center justify-center md:p-6 bg-white shadow-lg rounded-2xl transition-transform duration-1000 hover:scale-105"
      
      onMouseEnter={() => isSmallScreen && setHovered(index)}
      onMouseLeave={() => isSmallScreen && setHovered(null)}
    >
      {/* Image */}
      <Image
        src={imagePath}
        alt={name}
        height={100}
        width={100}
        className="rounded-md mt-2 md:mt-0 mb-4 border-2 aspect-square p-2 border-[#b00d07] shadow-sm"
      />

      {/* Name */}
      <CardTitle className="text-lg font-semibold text-gray-800">
        {name}
      </CardTitle>

      {/* Title */}
      <p className="text-sm text-gray-600 mt-1 text-center  font-medium">
        {title}
      </p>
      <div className="w-full flex justify-end mt-2">

      {hovered ? (
        <ChevronsUp onClick={()=>{
          setHovered(null)
        }} className="h-5 w-5 md:h-10 md:w-20" />
      ) : (
        <ChevronsDown
        onClick={()=>{
          setHovered(index)
        }} className="h-5 w-5 md:h-10 md:w-20" />
      )}
      </div>

      {/* Description */}
      <CardDescription
        className={`mt-2 text-sm text-center text-gray-500 transition-opacity duration-100 ${
          hovered ? "opacity-100" : "opacity-0 h-0"
        }`}
      >
        {description}
      </CardDescription>
    </Card>
  );
};

export default ClientCard;
