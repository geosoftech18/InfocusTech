import AnimatedImage from "@/components/ui/imageAnimation";
import Image from "next/image";

const PISuccessStory = ({
  heading,
  description,
  imageUrl,
}: {
  heading: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-40 gap-20 my-20">
      <div className="col-span-1 font-semibold text-center md:text-left  h-full flex items-center gap-5 flex-col  md:w-5/6">
        <div className="font-semibold text-2xl">{heading}</div>
        <div className="text-gray-600">{description}</div>{" "}
      </div>
      <AnimatedImage>
        <Image
          className="col-span-1 h-full"
          alt=""
          src={imageUrl || "/FlexibledeploymentOptions.png"}
          width={1000}
          height={1000}
        />
      </AnimatedImage>
    </div>
  );
};

export default PISuccessStory;
