import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";

// Import JSON data
import aboutAWS from "@/data/Services/AWSConsultingServices/about.json";
import cloudServices from "@/data/Services/AWSConsultingServices/cloudServices.json";
import benefitsAWSCloud from "@/data/Services/AWSConsultingServices/BenefitsAWSCloud.json";
import cloudMigration from "@/data/Services/AWSConsultingServices/cloudMigration.json";

// Extract data from JSON
const aboutAWSConsultingData = aboutAWS.aboutAWSConsultingJSON;
const cloudServicesData = cloudServices.cloudServicesJSON;
const benefitsAWSCloudData = benefitsAWSCloud.BenefitsAWSCloudJSON;
const cloudMigrationData = cloudMigration.CloudMigration;

const AWSConsultingServices = () => {
  return (
    <div>
      <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutAWSConsultingData}
      />

      {/* Our cloud services include */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={cloudServicesData} />

      {/* Business Benefits of Cloud Applications on AWS */}
      <BenefitsSapImplementation BenefitSapImplementationData={benefitsAWSCloudData} />

      <div className="h-20"></div>

      {/* Cloud Migration Services */}
      <KeyFeatureSapImplementation KeyFeatureSapImplementationData={cloudMigrationData} />
    </div>
  );
};

export default AWSConsultingServices;
