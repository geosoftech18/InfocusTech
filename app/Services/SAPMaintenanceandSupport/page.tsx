import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import { aboutSAPMaintenanceAndSupportJSON } from "@/data/Services/SAPMaintainanceandSupport/aboutSAPMaintainanceandSupport.json";

import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";


import {sapProjectSupportJSON} from "@/data/Services/SAPMaintainanceandSupport/projectSupport.json"

import { sapBusinessSupportJSON } from "@/data/Services/SAPMaintainanceandSupport/businessSupport.json"

import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

import {technicalSupportJSON} from "@/data/Services/SAPMaintainanceandSupport/technicalSupport.json"
import SAPLifecycle from "@/components/pages/services/SAPLifecycle";
const SAPMaintainanceandSupport = () => {
  return (
    <div>
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutSAPMaintenanceAndSupportJSON}
      />
      {/* Comprehensive SAP Project Support */}
      <ToolsAndTechnologiesWeUse
        ToolsAndTechnologiesWeUseData={sapProjectSupportJSON}
      />
      <ToolsAndTechnologiesWeUse
        ToolsAndTechnologiesWeUseData={sapBusinessSupportJSON}
        basis="textRight"
      />
      {/* Technical Support */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={technicalSupportJSON}/>

      <div className="my-20"></div>
      <SAPLifecycle />
      <div className="my-20"></div>

    </div>
  );
};

export default SAPMaintainanceandSupport;
