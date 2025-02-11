import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

import { About } from "@/data/Services/ERPCorporateTraining/about.json";

import { erpTrainingJSON } from "@/data/Services/ERPCorporateTraining/training.json";

import { erpCorporateTrainingJSON } from "@/data/Services/ERPCorporateTraining/erpCorporateTraining.json";

const ERPCorporateTraining = () => {
  return (
    <div>
      <AboutSapImplementation
        initialValue={0}
        finalValue={15}
        symbol="+"
        AboutSapImplementationData={About}
      />

      <ToolsAndTechnologiesWeUse
        ToolsAndTechnologiesWeUseData={erpTrainingJSON}
      />

      <AboutSapImplementation
        AboutSapImplementationData={erpCorporateTrainingJSON}
      />
    </div>
  );
};

export default ERPCorporateTraining;
