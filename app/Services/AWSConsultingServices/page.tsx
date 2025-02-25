import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";

import { aboutAWSConsultingJSON } from "@/data/Services/AWSConsultingServices/about.json";

import { cloudServicesJSON } from "@/data/Services/AWSConsultingServices/cloudServices.json";

import { BenefitsAWSCloudJSON } from "@/data/Services/AWSConsultingServices/BenefitsAWSCloud.json";

import { CloudMigration } from "@/data/Services/AWSConsultingServices/cloudMigration.json";

const AWSConsultingServices = () => {
  return (
    <div>
      <AboutSapImplementation
        initialValue={0}
        finalValue={15}
        symbol="+"
        AboutSapImplementationData={aboutAWSConsultingJSON}
      />
      {/*Our cloud services include */}
      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={cloudServicesJSON}
      />
      {/* Business Benefits of Cloud Applications on AWS */}
      <BenefitsSapImplementation
        BenefitSapImplementationData={BenefitsAWSCloudJSON}
      />

      <div className="h-20"></div>

      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={CloudMigration}
      />
    </div>
  );
};

export default AWSConsultingServices;
