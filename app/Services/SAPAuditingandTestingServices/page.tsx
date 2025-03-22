import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import DoorComponent from "@/components/pages/home/whatWeOffer";

// Import JSON data
import aboutData from "@/data/Services/SAPAuditingandTestingServices/about.json";
import sapTestingOfferings from "@/data/Services/SAPAuditingandTestingServices/SAPTestingServicesOfferings.json";
import sapTestingTools from "@/data/Services/SAPAuditingandTestingServices/SAPTestingTools.json";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getBenefitsComponent, getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Extract relevant data
const { AboutJSON } = aboutData;
const { SAPTestingServicesOfferingsJSON } = sapTestingOfferings;
const { SAPTestingServicesJSON } = sapTestingTools;

const SAPAuditingandTestingServices = async() => {

  // SAPTestingServicesJSON.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const {
          aboutPage1,
          doorComponent1,
          benefitsComponent1,
        } = (await getSolutionsGQL("77w2982lgOgeLlE9sbcgc7")).data.contentPage;
      
        if (
          !aboutPage1 ||
          !doorComponent1 ||
          !benefitsComponent1 
        ) {
          return <div>NADA</div>;
        }
      
        const doorComponent11 = extractDoorComponent(doorComponent1);
        const benefits1 = getBenefitsComponent(benefitsComponent1);


  return (
    <div className="md:my-10">
      {/* About SAP Auditing & Testing Services */}
      {/* <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={AboutJSON}
      /> */}
      <WhyChooseUs whyChooseUsData={aboutPage1}/>

      {/* SAP Testing Services Offerings */}
      <KeyFeatureSapImplementation
        Data={benefits1}
      />

      {/* Spacing */}
      <div className="h-20"></div>

      {/* SAP Testing Tools */}
      <DoorComponent Data={doorComponent11} />

      {/* Spacing */}
      <div className="h-20"></div>
    </div>
  );
};

export default SAPAuditingandTestingServices;
