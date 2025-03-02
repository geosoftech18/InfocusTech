import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON files using default imports
import aboutECODataFile from "@/data/IndustryExpertise/aboutECO.json";

// Extract necessary data
const aboutECO = aboutECODataFile.aboutECO;
const dynamicsECO = aboutECODataFile.dynamicsECO;
const challengesECO = aboutECODataFile.challengesECO;
const keyFeaturesECO = aboutECODataFile.KeyFeaturesECO;

const ECO = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={aboutECO} />
      <WhyChooseUs basis="textRight" whyChooseUsData={dynamicsECO} />

      {/* challenges */}
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={challengesECO}
      />
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={keyFeaturesECO}
      />
    </div>
  );
};

export default ECO;
