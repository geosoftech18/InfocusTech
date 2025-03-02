import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import DoorComponent from "@/components/pages/home/whatWeOffer";

// Import JSON data
import aboutData from "@/data/Services/SAPAuditingandTestingServices/about.json";
import sapTestingOfferings from "@/data/Services/SAPAuditingandTestingServices/SAPTestingServicesOfferings.json";
import sapTestingTools from "@/data/Services/SAPAuditingandTestingServices/SAPTestingTools.json";

// Extract relevant data
const { AboutJSON } = aboutData;
const { SAPTestingServicesOfferingsJSON } = sapTestingOfferings;
const { SAPTestingServicesJSON } = sapTestingTools;

const SAPAuditingandTestingServices = () => {
  return (
    <div>
      {/* About SAP Auditing & Testing Services */}
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={AboutJSON}
      />

      {/* SAP Testing Services Offerings */}
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={SAPTestingServicesOfferingsJSON}
      />

      {/* Spacing */}
      <div className="h-20"></div>

      {/* SAP Testing Tools */}
      <DoorComponent Data={SAPTestingServicesJSON} />

      {/* Spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default SAPAuditingandTestingServices;
