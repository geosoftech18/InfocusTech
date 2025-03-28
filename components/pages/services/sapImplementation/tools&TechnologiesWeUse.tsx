import Image from "next/image";

export interface ToolsAndTechnologiesWeUseData {
  Tag: string;
  Title: string;
  Description?: string;
  Tool: {
    imagePath?: string;
    name: string;
    description: string;
  }[];
};
interface ToolsTechnologiesWeUseProps {
  basis?: "textLeft" | "textRight";
  scroll?: boolean;
  ToolsAndTechnologiesWeUseData:ToolsAndTechnologiesWeUseData
  
}

const ToolsAndTechnologiesWeUse: React.FC<ToolsTechnologiesWeUseProps> = ({
  ToolsAndTechnologiesWeUseData,
  basis,
  scroll,
}) => {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3  mx-10 lg:mx-40 my-20 md:gap-10 lg:gap-20 ">
      {(basis === "textLeft" || basis === undefined) && (
        <>
          <TextArea
            ToolsAndTechnologiesWeUseData={ToolsAndTechnologiesWeUseData}
          />
          <ImagesArea
            ToolsAndTechnologiesWeUseData={ToolsAndTechnologiesWeUseData}
            scroll={scroll}
          />
        </>
      )}
      {basis === "textRight" && (
        <>
          <ImagesArea
            ToolsAndTechnologiesWeUseData={ToolsAndTechnologiesWeUseData}
            scroll={scroll}
          />
          <TextArea
            ToolsAndTechnologiesWeUseData={ToolsAndTechnologiesWeUseData}
          />
        </>
      )}
    </div>
  );
};

const TextArea: React.FC<ToolsTechnologiesWeUseProps> = ({
  ToolsAndTechnologiesWeUseData,
}) => {
  return (
    <div className="col-span-1 md:sticky md:top-20 h-[75vh] flex flex-col items-start justify-center md:justify-around gap-4 lg:gap-0">
      <div className="text-[#b00d07] text-xl font-semibold">
        {ToolsAndTechnologiesWeUseData.Tag}
      </div>
      <div className="font-semibold text-2xl lg:text-4xl">
        {ToolsAndTechnologiesWeUseData.Title}
      </div>
      <div className="bg-gradient-to-r from-[#b00d07] to-white w-2/4 h-2 mb-10">
        {" "}
      </div>
      <div className="text-gray-500 ">
        {ToolsAndTechnologiesWeUseData.Description}
      </div>
      {/* <div className="flex items-center gap-2 text-xl text-[#b00d07]">
        Read More <ChevronsRight />
      </div> */}
    </div>
  );
};

const ImagesArea: React.FC<ToolsTechnologiesWeUseProps> = ({
  ToolsAndTechnologiesWeUseData,
}) => {
  //  ${scroll && "overflow-y-scroll no-scrollbar"}
  // const content=(
  return (
    <div
      className={`col-span-1 lg:col-span-2 grid grid-cols-2  md:grid-cols-3 gap-2 
       
        `}
    >
      {ToolsAndTechnologiesWeUseData.Tool.map((item, index) => (
        <div
          className="p-2 relative group flex items-center text-center rounded-lg bg-gray-100 justify-center hover:bg-gray-200 flex-col py-4"
          key={index}
        >
          <div className="absolute inset-0 bg-[url('/vectors/3.jpg')] bg-cover bg-center opacity-90"></div>
          <Image className="z-10 group-hover:scale-105 transition-transform duration-300" alt="" src={item.imagePath || ""} height={100} width={100} />
          <div className="flex flex-col items-center justify-center gap-4 h-3/4 z-10">
            <div className="text-xl font-medium">{item.name}</div>
            <div className="text-gray-600 text-sm">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
  // )

  // return scroll ? (
  //   <ForcedScroll scrollAmount={100 /* adjust as needed */}>
  //     {content}
  //   </ForcedScroll>
  // ) : (
  //   content
  // );
};

export default ToolsAndTechnologiesWeUse;
