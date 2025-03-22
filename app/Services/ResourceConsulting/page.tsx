import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import DoorComponent from "@/components/pages/home/whatWeOffer";

// Import JSON data
import aboutStaffing from "@/data/Services/ResourceConsulting/about.json";
import permanentStaffing from "@/data/Services/ResourceConsulting/permanentStaffing.json";
import valueAddedServices from "@/data/Services/ResourceConsulting/valueaddedservices.json";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Extract relevant data
const { AboutStaffingConsultingJSON } = aboutStaffing;
const { permanentStaffingJSON } = permanentStaffing;
const { valueAddedServicesJSON } = valueAddedServices;

const ResourceConsulting = async() => {

  // valueAddedServicesJSON.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

 const {
        aboutPage1,
        aboutPage2,
        doorComponent1,
        doorComponent2
      } = (await getSolutionsGQL("36QHQonzeYpZZ3gb4ZBC2y")).data.contentPage;
    
      if (
        !aboutPage1 ||
        !aboutPage2 ||
        !doorComponent1 ||
        !doorComponent2 
      ) {
        return <div>NADA</div>;
      }
    
      const doorComponent11 = getToolsandTechnology(doorComponent1);
      const doorComponent22 = extractDoorComponent(doorComponent2);

  return (
    <div className="md:my-20">
      {/* About Staffing Consulting */}
      {/* <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={AboutStaffingConsultingJSON}
      /> */}
      <WhyChooseUs whyChooseUsData={aboutPage1}/>

      {/* Resource Consulting Heading & Description */}
      <div className="flex flex-col items-center justify-center gap-10 mx-10 md:mx-40 text-center">
        <h1 className="text-4xl font-semibold">{aboutPage2.heading}</h1>
        <p className="text-xl text-gray-800">
          {aboutPage2.description}
        </p>
      </div>

      {/* Permanent Staffing Solutions */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={doorComponent11} />

      {/* Value-Added Services */}
      <DoorComponent Data={doorComponent22} />
    </div>
  );
};

export default ResourceConsulting;
