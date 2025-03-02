import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON data
import aboutData from "@/data/Services/ERPCorporateTraining/about.json";
import trainingData from "@/data/Services/ERPCorporateTraining/training.json";
import corporateTrainingData from "@/data/Services/ERPCorporateTraining/erpCorporateTraining.json";

// Extract relevant data
const { About: aboutERP } = aboutData;
const { erpTrainingJSON: trainingDetails } = trainingData;
const { erpCorporateTrainingJSON: corporateTrainingDetails } = corporateTrainingData;

const ERPCorporateTraining = () => {
  return (
    <div>
      {/* About ERP Corporate Training */}
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutERP}
      />

      {/* ERP Training Details */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={trainingDetails} />

      {/* ERP Corporate Training Details */}
      <AboutSapImplementation AboutSapImplementationData={corporateTrainingDetails} />
    </div>
  );
};

export default ERPCorporateTraining;
