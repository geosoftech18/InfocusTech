// Import JSON data
import aboutData from "@/data/Services/SAPMaintainanceandSupport/aboutSAPMaintainanceandSupport.json";
import projectSupportData from "@/data/Services/SAPMaintainanceandSupport/projectSupport.json";
import businessSupportData from "@/data/Services/SAPMaintainanceandSupport/businessSupport.json";
import technicalSupportData from "@/data/Services/SAPMaintainanceandSupport/technicalSupport.json";

// Extract relevant data
const { aboutSAPMaintenanceAndSupportJSON } = aboutData;
const { sapProjectSupportJSON } = projectSupportData;
const { sapBusinessSupportJSON } = businessSupportData;
const { technicalSupportJSON } = technicalSupportData;

// Import Components
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import SAPLifecycle from "@/components/pages/services/SAPLifecycle";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getBenefitsComponent, getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

const SAPMaintainanceandSupport = async() => {

  // technicalSupportJSON.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

 const {
      aboutPage1,
      aboutPage2,
      doorComponent1,
      doorComponent2,
      benefitsComponent1,
    } = (await getSolutionsGQL("DPRofFj8VOtt0s03TM3d5")).data.contentPage;
  
    if (
      !aboutPage1 ||
      !aboutPage2 ||
      !doorComponent1 ||
      !doorComponent2 ||
      !benefitsComponent1 
    ) {
      return <div>NADA</div>;
    }
  
    const doorComponent11 = getToolsandTechnology(doorComponent1);
    const doorComponent22 = getToolsandTechnology(doorComponent2);
    const benefits1 = getBenefitsComponent(benefitsComponent1);

  return (
    <div>
      {/* About SAP Maintenance & Support */}
      {/* <AboutSapImplementation AboutSapImplementationData={aboutSAPMaintenanceAndSupportJSON} /> */}
      <WhyChooseUs whyChooseUsData={aboutPage1}/>

      {/* Comprehensive SAP Project Support */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={doorComponent11} />
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={doorComponent22} basis="textRight" />

      {/* Technical Support */}
      <KeyFeatureSapImplementation Data={benefits1} />

      <div className="my-20"></div>

      {/* SAP Lifecycle */}
      <SAPLifecycle Data={aboutPage2} />

      <div className="my-20"></div>
    </div>
  );
};

export default SAPMaintainanceandSupport;
