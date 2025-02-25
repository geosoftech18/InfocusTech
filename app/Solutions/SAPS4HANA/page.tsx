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

      {/* Benefits of Using an In-Memory Platform with SAP S/4HANA */}
      <BenefitsSapImplementation BenefitSapImplementationData={BenefitsJSON} />

      <div className="h-14"></div>
      {/* SAP S/4HANA: Immediate. Intelligent. Integrated. */}
      <DoorComponent Data={Data} />

      <div className="h-20"></div>
      {/* Key Benefits of SAP S/4HANA */}
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={KeyBenefits}
      />
      {/* Key Highlights of SAP S/4HANA */}
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={KeyHighlights}
      />
    </div>
  );
};

export default S4RisePrivateCloud;
