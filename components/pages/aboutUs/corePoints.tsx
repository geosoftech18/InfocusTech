import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CountUp from "@/components/ui/countUp";
import Image from "next/image";

export interface CorePointsData {
  title: string;
  subTitle: string;
  cardData: {
    number: string;
    symbol: string;
    caption: string;
    imagePath: string;
  }[];
}
interface CorePointsInterface {
  CorePointsData: CorePointsData;
}

const CorePoints: React.FC<CorePointsInterface> = ({ CorePointsData }) => {
  return (
    <div
      className="relative px-10 md:px-40 mt-20 py-10 text-white bg-cover"
      style={{
        backgroundColor: "#b00d07",
        backgroundImage: "url('/vectors/3.jpg')",
        // backgroundRepeat: "repeat",
        // backgroundSize: "600px 600px", 
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Content Layer */}
      <div className="relative z-10">
        <div className="flex flex-col gap-5 mb-10">
          <div className="text-3xl max-w-4xl font-bold">{CorePointsData.title}</div>
          <div className="text-sm md:text-lg w-3/4">{CorePointsData.subTitle}</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CorePointsData.cardData.map((data, index) => (
            <Card
              className="col-span-1 p-5 flex items-center justify-center flex-col aspect-square bg-white text-black shadow-md"
              key={index}
            >
              <CardTitle className="mb-5">
                <Image src={data.imagePath} width={100} height={100} alt="" className="h-14 w-14 font-bold" />
              </CardTitle>
              <CardContent className="flex p-0 flex-col gap-2 text-center">
                <CountUp initialValue={0} finalValue={Number(data.number)} symbol={data.symbol} />
                <div className="text-xs md:text-sm font-medium">{data.caption}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorePoints;
