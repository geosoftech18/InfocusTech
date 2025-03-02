import Image from "next/image";

const SAPLifecycle = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:mx-40 gap-16 items-center">
      {/* Text Section */}
      <div className="col-span-1 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-center md:text-left">
          Our SAP Service Offerings Span the Full Range of the SAP Lifecycle
        </h2>
        <p className="text-md text-gray-600 leading-relaxed">
          From initial implementation to ongoing support and enhancements, our
          SAP services cover every stage of the lifecycle, ensuring optimal
          performance and continuous value for your business.
        </p>

        <ul className="text-gray-700 space-y-2">
          <li>
            <strong>🔹 Business Consulting Services:</strong>
          </li>
          <li>
            <strong>🔹 Governance Services:</strong>
          </li>
          <li>
            <strong>🔹 Implementation Services:</strong>
          </li>
          <li>
            <strong>🔹 Upgrade & Rollouts:</strong>
          </li>
          <li>
            <strong>🔹 Application Management Services:</strong>
          </li>
          <li>
            <strong>🔹 Maintenance Support:</strong>
          </li>
        </ul>
      </div>

      <Image
        className="w-full max-w-lg col-span-1 h-full "
        alt="SAP Lifecycle"
        src="/SAPLifecycle.png"
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default SAPLifecycle;
