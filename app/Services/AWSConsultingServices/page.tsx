import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";

// Import JSON data
import aboutAWS from "@/data/Services/AWSConsultingServices/about.json";
import cloudServices from "@/data/Services/AWSConsultingServices/cloudServices.json";
import benefitsAWSCloud from "@/data/Services/AWSConsultingServices/BenefitsAWSCloud.json";
import cloudMigration from "@/data/Services/AWSConsultingServices/cloudMigration.json";
import { itemsUploader } from "@/lib/uploader/uploader";
import {
  getBenefitsComponent,
  getSolutionsGQL,
} from "@/lib/graphql/extractSolutionsPages";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Extract data from JSON
const aboutAWSConsultingData = aboutAWS.aboutAWSConsultingJSON;
const cloudServicesData = cloudServices.cloudServicesJSON;
const benefitsAWSCloudData = benefitsAWSCloud.BenefitsAWSCloudJSON;
const cloudMigrationData = cloudMigration.CloudMigration;

const AWSConsultingServices = async () => {
  // cloudMigrationData.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });
  const {
    aboutPage1,
    benefitsComponent1,
    benefitsComponent2,
    benefitsComponent3,
  } = (await getSolutionsGQL("66k13a2Zcfq3hjbRgBDkwr")).data.contentPage;

  if (
    !aboutPage1 ||
    !benefitsComponent1 ||
    !benefitsComponent2 ||
    !benefitsComponent3
  ) {
    return <div>NADA</div>;
  }

  const benefits1 = getBenefitsComponent(benefitsComponent1);
  const benefits2 = getBenefitsComponent(benefitsComponent2);
  const benefits3 = getBenefitsComponent(benefitsComponent3);

  return (
    <div>
      <div className="md:h-10"></div>
      {/* <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutAWSConsultingData}
      /> */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />

      {/* Our cloud services include */}
      <KeyFeatureSapImplementation Data={benefits1} />

      {/* Business Benefits of Cloud Applications on AWS */}
      <BenefitsSapImplementation Data={benefits2} />

      <div className="md:h-32"></div>

      {/* Cloud Migration Services */}
      <KeyFeatureSapImplementation Data={benefits3} />
    </div>
  );
};

export default AWSConsultingServices;
