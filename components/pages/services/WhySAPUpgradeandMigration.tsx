import { Button } from "@/components/ui/button";
import Image from "next/image";
import { DoorComponentData } from "../home/whatWeOffer";

interface WhySAPUpgradeandMigrationProps {
  Data: DoorComponentData;
}

const WhySAPUpgradeandMigration: React.FC<WhySAPUpgradeandMigrationProps> = ({
  Data,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 mx-6 lg:mx-40 gap-8 lg:gap-16 my-10 lg:my-24">
      {/* Image Section */}
      <div className="col-span-1 lg:col-span-5 relative">
        <Image
          src="/whySAPUpgradationandMigration.jpg"
          alt="SAP Upgrade"
          width={1000}
          height={1000}
          className="w-full rounded-xl shadow-lg h-full"
        />
      </div>

      {/* Content Section */}
      <div className="col-span-1 lg:col-span-7 flex flex-col gap-6 lg:gap-10">
        {/* Heading */}
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900">
            {Data.tag}
          </h2>
          <h3 className="text-xl lg:text-3xl font-light font-serif text-gray-800 mt-2 lg:mt-4 underline">
            {Data.heading}
          </h3>
          <p className="text-gray-600 text-sm lg:text-lg leading-relaxed mt-2">
            {Data.description}
          </p>
        </div>

        {/* Data List */}
        <div className="space-y-4">
          {Data.items.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-6 border-b pb-4"
            >
              <div className="font-semibold text-md lg:text-lg w-1/4 text-gray-900">
                {item.name}
              </div>
              <div className="text-gray-600 text-sm lg:text-md text-justify w-3/4">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 w-full lg:w-auto">
          Read More
        </Button> */}
      </div>
    </div>
  );
};

export default WhySAPUpgradeandMigration;
