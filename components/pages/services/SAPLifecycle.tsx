import Image from "next/image";

const SAPLifecycle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-28 gap-20">
      <div className="col-span-1 font-semibold text-center md:text-left  h-full flex items-center gap-20 flex-col  w-5/6">
        <div className="font-semibold text-4xl">
          Our SAP Service Offerings Span the Full Range of the SAP Lifecycle
        </div>
        <div className="text-md text-gray-600">
          From initial implementation to ongoing support and enhancements, our
          SAP services cover every stage of the lifecycle, ensuring optimal
          performance and continuous value for your business.
        </div>{" "}
      </div>
      <Image
        className="col-span-1 "
        alt=""
        src={"/SAPLifecycle.png"}
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default SAPLifecycle;
