import Image from "next/image";
import { whyChooseUsData } from "../home/whyChooseUs";
import AnimatedImage from "@/components/ui/imageAnimation";

const FlexibleDeploymentOptions = ({
  heading,
  description,
  imageUrl,
}: {
  heading: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="container mx-auto px-6 md:px-20 lg:px-32 my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">{heading}</h2>

          <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Section */}
          <AnimatedImage>
            <Image
              className="w-full h-full "
              alt="Flexible Deployment Options"
              src={imageUrl || "/FlexibledeploymentOptions.png"}
              width={1000}
              height={1000}
            />
          </AnimatedImage>
        </div>
    </div>
  );
};

export default FlexibleDeploymentOptions;
