import Image from "next/image";
import { DoorComponentData } from "../home/whatWeOffer";
import { whyChooseUsData } from "../home/whyChooseUs";

interface SAPLifecycleProps{
  Data:whyChooseUsData
}

const SAPLifecycle:React.FC<SAPLifecycleProps> = ({
  Data
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:mx-40 gap-16 items-center">
      {/* Text Section */}
      <div className="col-span-1 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-center md:text-left">
          {Data.heading}
        </h2>
        <p className="text-md text-gray-600 leading-relaxed">
          {Data.description}
        </p>

        <ul className="text-gray-700 space-y-2">
          {Data.bulletPoints.map((item,index)=>((
             <li key={index}>
             <strong>🔹{item.toString()}</strong>
           </li>
          )))}
        </ul>
      </div>

      <Image
        className="w-full max-w-lg col-span-1 h-full "
        alt="SAP Lifecycle"
        src={Data.imagePath||"/SAPLifecycle.png"}
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default SAPLifecycle;
