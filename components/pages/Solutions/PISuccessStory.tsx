import Image from "next/image";

const PISuccessStory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40 gap-20 my-20">
      <div className="col-span-1 font-semibold text-center md:text-left  h-full flex items-center gap-5 flex-col  w-5/6">
        <div className="font-semibold text-2xl">
          Infocus Success Story: SAP PI & Bank Communication Management (BCM)
          Integration
        </div>
        <div className="text-gray-600">
          Infocus successfully implemented SAP Process Integration (PI) and Bank
          Communication Management (BCM) for a foreign bank in Africa, enabling
          seamless platform interoperability and end-to-end process integration.
          By providing expert recommendations and solutions, Infocus configured
          the BCM module and rigorously tested all interfaces, ensuring smooth
          communication and data exchange both with and without BCM. The Infocus
          team, equipped with extensive expertise in SAP PI/XI, expertly
          navigated complex technical challenges to deliver a robust integration
          solution tailored to the bank’s needs.
        </div>{" "}
      </div>
      <Image
        className="col-span-1 h-full"
        alt=""
        src={"/FlexibledeploymentOptions.png"}
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default PISuccessStory;
