// Import JSON data
import aboutData from "@/data/Services/SAPMaintainanceandSupport/aboutSAPMaintainanceandSupport.json";
import projectSupportData from "@/data/Services/SAPMaintainanceandSupport/projectSupport.json";
import businessSupportData from "@/data/Services/SAPMaintainanceandSupport/businessSupport.json";
import technicalSupportData from "@/data/Services/SAPMaintainanceandSupport/technicalSupport.json";

// Extract relevant data
const { aboutSAPMaintenanceAndSupportJSON } = aboutData;
const { sapProjectSupportJSON } = projectSupportData;
const { sapBusinessSupportJSON } = businessSupportData;
const { technicalSupportJSON } = technicalSupportData;

// Import Components
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import SAPLifecycle from "@/components/pages/services/SAPLifecycle";

const SAPMaintainanceandSupport = () => {
  return (
    <div>
      {/* About SAP Maintenance & Support */}
      <AboutSapImplementation AboutSapImplementationData={aboutSAPMaintenanceAndSupportJSON} />

      {/* Comprehensive SAP Project Support */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={sapProjectSupportJSON} />
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={sapBusinessSupportJSON} basis="textRight" />

      {/* Technical Support */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={technicalSupportJSON} />

      <div className="my-20"></div>

      {/* SAP Lifecycle */}
      <SAPLifecycle />

      <div className="my-20"></div>
    </div>
  );
};

export default SAPMaintainanceandSupport;
