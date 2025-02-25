import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import { aboutSAPImplementationJSON } from "@/data/Services/SapImplementation/aboutSapImplementation.json";

import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import { KeyFeatureSapImplementationJSON } from "@/data/Services/SapImplementation/KeyFeatureSapImplementation.json";

import { toolsTechnologiesWeUseJSON } from "@/data/Services/SapImplementation/tools&TechnologiesWeUse.json";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

import { BenefitsSapImplementationJSON } from "@/data/Services/SapImplementation/BenefitsSapImplementation.json";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";

import { SapImplementationProcessJSON } from "@/data/Services/SapImplementation/sapImplementationProcess.json";
import SapImplementationProcess from "@/components/pages/services/sapImplementation/sapImplementationProcess";

const SapImplementation = () => {
  return (
    <div>
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutSAPImplementationJSON}
      />
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={KeyFeatureSapImplementationJSON}
      />
      <ToolsAndTechnologiesWeUse
        scroll={true}
        ToolsAndTechnologiesWeUseData={toolsTechnologiesWeUseJSON}
      />
      <BenefitsSapImplementation
        BenefitSapImplementationData={BenefitsSapImplementationJSON}
      />
      <div className="h-20"></div>
      <SapImplementationProcess
        SapImplemetationProcessData={SapImplementationProcessJSON}
      />
      <div className="h-20"></div>
    </div>
  );
};

export default SapImplementation;
