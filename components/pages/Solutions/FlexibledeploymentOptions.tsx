import Image from "next/image";
import { whyChooseUsData } from "../home/whyChooseUs";

const FlexibleDeploymentOptions= ({
heading,
description,
imageUrl
}:{
  heading:string,
  description:string,
  imageUrl:string
}) => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            {heading}
          </h2>
          
          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            className="w-full h-auto max-w-lg"
            alt="Flexible Deployment Options"
            src={imageUrl||"/FlexibledeploymentOptions.png"}
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default FlexibleDeploymentOptions;
