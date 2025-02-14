import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import { AboutUsJSON } from "@/data/Solutions/S4RisePrivateCloud/about.json";
import { BenefitsJSON } from "@/data/Solutions/S4RisePrivateCloud/benefits.json";

import { Data } from "@/data/Solutions/S4RisePrivateCloud/keyPoints.json";

import { KeyBenefits } from "@/data/Solutions/S4RisePrivateCloud/keyBenefits.json";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

import { KeyHighlights } from "@/data/Solutions/S4RisePrivateCloud/keyHighlights.json";

const S4RisePrivateCloud = () => {
  return (
    <div>
      <WhyChooseUs whyChooseUsData={AboutUsJSON} />

      <BenefitsSapImplementation BenefitSapImplementationData={BenefitsJSON} />

      <DoorComponent Data={Data} />

      <div className="h-20"></div>

      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={KeyBenefits}
      />

      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={KeyHighlights}
      />
    </div>
  );
};

export default S4RisePrivateCloud;
