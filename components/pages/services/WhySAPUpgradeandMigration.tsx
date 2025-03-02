import { Button } from "@/components/ui/button";
import Image from "next/image";

// const data = [
//   {
//     number: "112",
//     symbol: "+",
//     tag: "Active Users",
//   },
//   {
//     number: "112",
//     symbol: "+",
//     tag: "Active Users",
//   },
//   {
//     number: "112",
//     symbol: "+",
//     tag: "Active Users",
//   },
// ];

interface WhySAPUpgradeandMigrationProps {
  WhySAPUpgradeandMigrationData: {
    heading: {
      normal: string;
      emphasized: string;
    };
    subheading: string;
    details: {
      tag: string;
      description: string;
    }[];
  };
}

const WhySAPUpgradeandMigration: React.FC<WhySAPUpgradeandMigrationProps> = ({
  WhySAPUpgradeandMigrationData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:mx-40 gap-10 md:gap-20 my-20 md:my-20 h-[75vh]">
      <div className="col-span-1 md:col-span-5 relative">
        <Image
          src={"/whySAPUpgradationandMigration.jpg"}
          alt=""
          layout="fill"
          className="h-[75vh] rounded-lg"
        />
        {/* <div className="absolute top-20 -left-5 bg-gray-200 px-5 pt-2 pb-5 rounded-lg font-serif text-xl">
          {data.map((item, index) => (
            <div key={index} className="border-b-2 border-black p-4">
              <CountUp
                initialValue={0}
                finalValue={Number(item.number)}
                symbol={item.symbol}
              />
              <div className="">{item.tag}</div>
            </div>
          ))}
        </div> */}
      </div>
      <div className="col-span-1 md:col-span-7 h-full flex flex-col justify-between gap-5 md:gap-0">
        {/* heading */}
        <div className="">
          <div className="font-semibold text-2xl md:text-3xl">
            {WhySAPUpgradeandMigrationData.heading.normal}
          </div>
          <div className="font-extralight text-2xl md:text-3xl font-serif flex flex-col gap-2">
            <div className="underline ">
              {WhySAPUpgradeandMigrationData.heading.emphasized}
            </div>
            <div className="text-gray-600 text-xs md:text-lg tracking-tight">
              {WhySAPUpgradeandMigrationData.subheading}
            </div>
          </div>
        </div>
        {/* subheading */}

        {/* data */}
        <div>
          {WhySAPUpgradeandMigrationData.details.map((item, index) => (
            <div
              className="border-b py-2 md:py-2 flex items-center justify-between gap-10"
              key={index}
            >
              <div className="font-semibold text-sm md:text-md w-1/4">
                {item.tag}
              </div>
              <div className="text-gray-600 text-xs md:text-md text-justify w-3/4">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        {/* buttons/CTA */}
        <Button className="bg-[#b00d07] w-full">Read More</Button>
      </div>
    </div>
  );
};

export default WhySAPUpgradeandMigration;
