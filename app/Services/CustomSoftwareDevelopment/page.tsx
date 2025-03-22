import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON data
import aboutCustomSoftware from "@/data/Services/CustomSoftwareDevelopment/about.json";
import developmentApproach from "@/data/Services/CustomSoftwareDevelopment/developmentApproach.json";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import { getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import { itemsUploader } from "@/lib/uploader/uploader";

// Extract data from JSON
const aboutCustomSoftwareData = aboutCustomSoftware.aboutCustomSoftwareDevelopmentJSON;
const developmentApproachData = developmentApproach.developmentApproachJSON;

const CustomSoftwareDevelopment = async() => {
//   developmentApproachData.Tool.map((item) => {
//     itemsUploader({ name: item.name, description: item.description });
//   });


  const {
          aboutPage1,
          doorComponent1,
        } = (await getSolutionsGQL("7ecUYFTJkbITWVLdJrcxgy")).data.contentPage;
      
        if (
          !aboutPage1 ||
          !doorComponent1 
        ) {
          return <div>NADA</div>;
        }
      
        const doorComponent11 = getToolsandTechnology(doorComponent1);
  return (
    <div className="md:my-10">
      {/* About Custom Software Development */}
      {/* <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutCustomSoftwareData}
      /> */}

      <WhyChooseUs whyChooseUsData={aboutPage1}/>

      {/* Our Development Approach */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={doorComponent11} />
    </div>
  );
};

export default CustomSoftwareDevelopment;
