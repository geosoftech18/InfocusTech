import Image from "next/image";

const FlexibledeploymentOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40 gap-20 my-20">
      <div className="col-span-1 font-semibold text-center md:text-left  h-full flex items-center gap-5 flex-col  w-5/6">
        <div className="font-semibold text-4xl">
          Flexible deployment Options:
          <div className="text-gray-600 text-3xl"> On-premise and Cloud Solutions addressing
          all your needs.</div>
        </div>
        <div className="text-md text-gray-600">
          SAP and Ariba offer flexible deployment options, allowing businesses
          to choose between on-premise and cloud-based solutions to best fit
          their needs. Whether you prefer the control of on-premise
          installations or the scalability and convenience of cloud solutions,
          both options provide seamless integration and robust procurement
          functionality. On-premise and Cloud Solutions Adaptable to your
          business requirements, these solutions ensure that organizations can
          scale operations, improve agility, and optimize procurement processes
          regardless of their infrastructure preferences. Choose the deployment
          that aligns with your IT strategy, compliance needs, and operational
          goals.
        </div>{" "}
      </div>
      <Image
        className="col-span-1 "
        alt=""
        src={"/FlexibledeploymentOptions.png"}
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default FlexibledeploymentOptions;
