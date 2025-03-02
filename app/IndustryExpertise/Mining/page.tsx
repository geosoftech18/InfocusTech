import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON files using default imports
import miningData from "@/data/IndustryExpertise/mining.json";

// Extract necessary data
const aboutMining = miningData.aboutMining;
const SAPforMining = miningData.SAPforMining;
const ComoditySCM = miningData.ComoditySCM;
const howSAPSolutionsHelp = miningData.howSAPSolutionsHelp;
const benefitsMining = miningData.benefitsMining;

const Mining = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutMining} />

      {/* Commodity SCM */}
      <ToolsAndTechnologiesWeUse scroll={true} ToolsAndTechnologiesWeUseData={ComoditySCM} />

      {/* How SAP solutions help */}
      <DoorComponent Data={howSAPSolutionsHelp} />

      <div className="h-20"></div>

      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={benefitsMining} />

      <WhyChooseUs whyChooseUsData={SAPforMining} />
    </div>
  );
};

export default Mining;
