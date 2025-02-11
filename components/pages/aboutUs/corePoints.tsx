import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CountUp from "@/components/ui/countUp";
import { Heart } from "lucide-react";

interface CorePointsInterface {
  CorePointsData: {
    title: string;
    subTitle: string;
    cardData: {
      number: string;
      symbol:string;
      caption: string;
    }[];
  };
}

const CorePoints: React.FC<CorePointsInterface> = ({ CorePointsData }) => {
  return (
    <div className="bg-[#b00d07] px-10  md:px-28 mt-20 py-10">
      <div className="flex flex-col gap-10 mb-10">
        <div className="text-3xl md:text-6xl text-gray-100 max-w-4xl font-semibold">{CorePointsData.title}</div>
        <div className="text-gray-300 text-2xl w-3/4">{CorePointsData.subTitle}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {CorePointsData.cardData.map((data, index) => (
          <Card className="col-span-1 p-5 flex items-start justify-center flex-col aspect-square" key={index}>
            <CardTitle className="mb-5">
              <Heart className="h-14 w-14 font-bold " />
            </CardTitle>
            <CardContent className="flex p-0 flex-col gap-5">
                <CountUp initialValue={0} finalValue={Number(data.number)} symbol={data.symbol}/>
                <div>{data.caption}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CorePoints;
