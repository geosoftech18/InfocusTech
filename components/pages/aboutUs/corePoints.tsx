import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

interface CorePointsInterface {
  CorePointsData: {
    title: string;
    subTitle: string;
    cardData: {
      number: string;
      caption: string;
    }[];
  };
}

const CorePoints: React.FC<CorePointsInterface> = ({ CorePointsData }) => {
  return (
    <div className="bg-[#b00d07] px-20 mt-20 py-10">
      <div className="flex flex-col gap-10 mb-10">
        <div className="text-6xl font-extrabold">{CorePointsData.title.toUpperCase()}</div>
        <div>{CorePointsData.subTitle}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {CorePointsData.cardData.map((data, index) => (
          <Card className="col-span-1 p-5 flex items-start justify-center flex-col aspect-square" key={index}>
            <CardTitle className="mb-5">
              <Heart className="h-14 w-14 font-bold " />
            </CardTitle>
            <CardContent className="flex p-0 flex-col gap-5">
                <div className="text-3xl font-extrabold">{data.number}</div>
                <div>{data.caption}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CorePoints;
