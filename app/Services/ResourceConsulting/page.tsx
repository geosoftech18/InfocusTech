import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import DoorComponent from "@/components/pages/home/whatWeOffer";

// Import JSON data
import aboutStaffing from "@/data/Services/ResourceConsulting/about.json";
import permanentStaffing from "@/data/Services/ResourceConsulting/permanentStaffing.json";
import valueAddedServices from "@/data/Services/ResourceConsulting/valueaddedservices.json";

// Extract relevant data
const { AboutStaffingConsultingJSON } = aboutStaffing;
const { permanentStaffingJSON } = permanentStaffing;
const { valueAddedServicesJSON } = valueAddedServices;

const ResourceConsulting = () => {
  return (
    <div>
      {/* About Staffing Consulting */}
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={AboutStaffingConsultingJSON}
      />

      {/* Resource Consulting Heading & Description */}
      <div className="flex flex-col items-center justify-center gap-10 px-28 text-center">
        <h1 className="text-4xl font-semibold">Resource Consulting</h1>
        <p className="text-xl text-gray-800">
          Infocus provides expert Resource Consulting to help organizations
          effectively manage their talent acquisition needs. Our specialized
          services ensure that businesses have access to the right professionals,
          enhancing overall productivity and success. From permanent staffing
          solutions to value-added services, Infocus offers a comprehensive
          approach to meet today&apos;s hiring challenges.
        </p>
      </div>

      {/* Permanent Staffing Solutions */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={permanentStaffingJSON} />

      {/* Value-Added Services */}
      <DoorComponent Data={valueAddedServicesJSON} />
    </div>
  );
};

export default ResourceConsulting;
