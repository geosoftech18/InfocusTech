import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";

import { aboutAWSConsultingJSON } from "@/data/Services/AWSConsultingServices/about.json";

import { cloudServicesJSON } from "@/data/Services/AWSConsultingServices/cloudServices.json";

import { BenefitsAWSCloudJSON } from "@/data/Services/AWSConsultingServices/BenefitsAWSCloud.json";
const AWSConsultingServices = () => {
  return (
    <div>
      <AboutSapImplementation
        initialValue={0}
        finalValue={15}
        symbol="+"
        AboutSapImplementationData={aboutAWSConsultingJSON}
      />

      <KeyFeatureSapImplementation
        KeyFeatureSapImplementationData={cloudServicesJSON}
      />

      <BenefitsSapImplementation
        BenefitSapImplementationData={BenefitsAWSCloudJSON}
      />
    </div>
  );
};

export default AWSConsultingServices;
