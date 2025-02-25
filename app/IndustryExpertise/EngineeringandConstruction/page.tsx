import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import {
  aboutECO,
  dynamicsECO,
  challengesECO,
  KeyFeaturesECO,
} from "@/data/IndustryExpertise/aboutECO.json";

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
        KeyFeatureSapImplementationData={KeyFeaturesECO}
      />
    </div>
  );
};

export default ECO;
