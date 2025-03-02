// Import JSON data
import aboutData from "@/data/Services/SapImplementation/aboutSapImplementation.json";
import keyFeaturesData from "@/data/Services/SapImplementation/KeyFeatureSapImplementation.json";
import toolsTechnologiesData from "@/data/Services/SapImplementation/tools&TechnologiesWeUse.json";
import benefitsData from "@/data/Services/SapImplementation/BenefitsSapImplementation.json";
import implementationProcessData from "@/data/Services/SapImplementation/sapImplementationProcess.json";

// Extract relevant data
const { aboutSAPImplementationJSON } = aboutData;
const { KeyFeatureSapImplementationJSON } = keyFeaturesData;
const { toolsTechnologiesWeUseJSON } = toolsTechnologiesData;
const { BenefitsSapImplementationJSON } = benefitsData;
const { SapImplementationProcessJSON } = implementationProcessData;

// Import Components
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import SapImplementationProcess from "@/components/pages/services/sapImplementation/sapImplementationProcess";

const SapImplementation = () => {
  return (
    <div>
      {/* About SAP Implementation */}
      <AboutSapImplementation AboutSapImplementationData={aboutSAPImplementationJSON} />

      {/* Key Features */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={KeyFeatureSapImplementationJSON} />

      {/* Tools & Technologies We Use */}
      <ToolsAndTechnologiesWeUse scroll ToolsAndTechnologiesWeUseData={toolsTechnologiesWeUseJSON} />

      {/* Business Benefits */}
      <BenefitsSapImplementation BenefitSapImplementationData={BenefitsSapImplementationJSON} />

      <div className="h-20"></div>

      {/* SAP Implementation Process */}
      <SapImplementationProcess SapImplemetationProcessData={SapImplementationProcessJSON} />

      <div className="h-20"></div>
    </div>
  );
};

export default SapImplementation;
