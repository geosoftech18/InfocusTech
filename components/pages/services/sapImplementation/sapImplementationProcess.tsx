import Image from "next/image";

interface SapImplementationProcessProps {
  
  SapImplemetationProcessData: {
    tag: string;
    title: string;
    steps: { imagePath: string; name: string; description: string }[];
  };
}

const SapImplementationProcess: React.FC<SapImplementationProcessProps> = ({

  SapImplemetationProcessData,
}) => {
  return (
    <div className="flex lg:h-[75vh] relative items-center justify-start flex-col gap-10 bg-gray-200 py-20 md:mb-56 ">
      <div className="border border-[#b00d07] border-dotted p-2 font-bold text-[#b00d07]">
        {SapImplemetationProcessData.tag}
      </div>
      <div className="text-4xl font-semibold">
        {SapImplemetationProcessData.title}
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:absolute md:px-40 w-full top-1/2`}>
        {SapImplemetationProcessData.steps.map((item, index) => (
          <div key={index} className="flex items-center justify-center flex-col gap-10 group">
            <div className="rounded-full border-[#b00d07] group-hover:bg-gray-200 border-dashed border p-10">
              <Image className="group-hover:scale-125 h-16 w-16 transition duration-500" alt="" src={item.imagePath} height={100} width={100} />
            </div>
            <div className="relative bg-white group-hover:bg-gray-300 group-hover:scale-105 transition duration-500 p-4 shadow-lg rounded-lg w-64 border flex items-start justify-between gap-4 flex-col h-72">
              <div className="text-gray-400 group-hover:text-gray-600">0{index+1}</div>
              <div className="font-semibold text-2xl group-hover:font-bold">{item.name}</div>
              <div className="text-gray-500 group-hover:text-gray-600">{item.description}</div>

              {/* Triangle at the top center */}
              <div
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                          border-l-8 border-r-8 border-b-8 border-transparent 
                          border-b-white group-hover:border-b-gray-500"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SapImplementationProcess;
