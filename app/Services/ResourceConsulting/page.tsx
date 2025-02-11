import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

import { AboutStaffingConsultingJSON } from "@/data/Services/ResourceConsulting/about.json";

import DoorComponent from "@/components/pages/home/whatWeOffer";
import { permanentStaffingJSON } from "@/data/Services/ResourceConsulting/permanentStaffing.json";

import { valueAddedServicesJSON } from "@/data/Services/ResourceConsulting/valueaddedservices.json";

const ResourceConsulting = () => {
  return (
    <div>
      <AboutSapImplementation
        initialValue={0}
        finalValue={15}
        symbol="+"
        AboutSapImplementationData={AboutStaffingConsultingJSON}
      />
      {/* heading */}
      <div className="flex items-center justify-center flex-col gap-10 px-28">
        <div className="text-4xl font-semibold ">Resource Consulting</div>
        <div className="text-xl text-gray-800 text-center">
          Infocus provides expert Resource Consulting to help organizations
          effectively manage their talent acquisition needs. Our specialized
          services ensure that businesses have access to the right
          professionals, enhancing overall productivity and success. From
          permanent staffing solutions to value-added services, Infocus offers a
          comprehensive approach to meet today&apos;s hiring challenges.
        </div>
      </div>
      <ToolsAndTechnologiesWeUse
        ToolsAndTechnologiesWeUseData={permanentStaffingJSON}
      />
      <DoorComponent Data={valueAddedServicesJSON}/>
    </div>
  );
};

export default ResourceConsulting;
