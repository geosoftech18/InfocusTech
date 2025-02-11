import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

import { aboutCustomSoftwareDevelopmentJSON } from "@/data/Services/CustomSoftwareDevelopment/about.json";
import { developmentApproachJSON } from "@/data/Services/CustomSoftwareDevelopment/developmentApproach.json";


const CustomSoftwareDevelopment = () => {
  return (
    <div>
      <AboutSapImplementation
        initialValue={0}
        finalValue={15}
        symbol="+"
        AboutSapImplementationData={aboutCustomSoftwareDevelopmentJSON}
      />

      {/* Our Development Approach */}
      <ToolsAndTechnologiesWeUse
        ToolsAndTechnologiesWeUseData={developmentApproachJSON}
      />
    </div>
  );
};

export default CustomSoftwareDevelopment;
