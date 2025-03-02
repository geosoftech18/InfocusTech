import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON data
import aboutCustomSoftware from "@/data/Services/CustomSoftwareDevelopment/about.json";
import developmentApproach from "@/data/Services/CustomSoftwareDevelopment/developmentApproach.json";

// Extract data from JSON
const aboutCustomSoftwareData = aboutCustomSoftware.aboutCustomSoftwareDevelopmentJSON;
const developmentApproachData = developmentApproach.developmentApproachJSON;

const CustomSoftwareDevelopment = () => {
  return (
    <div>
      {/* About Custom Software Development */}
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutCustomSoftwareData}
      />

      {/* Our Development Approach */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={developmentApproachData} />
    </div>
  );
};

export default CustomSoftwareDevelopment;
