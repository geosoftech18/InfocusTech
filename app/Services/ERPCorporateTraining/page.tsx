import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";

// Import JSON data
import aboutData from "@/data/Services/ERPCorporateTraining/about.json";
import trainingData from "@/data/Services/ERPCorporateTraining/training.json";
import corporateTrainingData from "@/data/Services/ERPCorporateTraining/erpCorporateTraining.json";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getSolutionsGQL, getToolsandTechnology } from "@/lib/graphql/extractSolutionsPages";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

// Extract relevant data
const { About: aboutERP } = aboutData;
const { erpTrainingJSON: trainingDetails } = trainingData;
const { erpCorporateTrainingJSON: corporateTrainingDetails } = corporateTrainingData;

const ERPCorporateTraining = async() => {

  // trainingDetails.Tool.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

  const {
          aboutPage1,
          aboutPage2,
          doorComponent1
        } = (await getSolutionsGQL("2xq9JhoVyDH3fxXxwchFPh")).data.contentPage;
      
        if (
          !aboutPage1 ||
          !aboutPage2 ||
          !doorComponent1 
        ) {
          return <div>NADA</div>;
        }
      
        const doorComponent11 = getToolsandTechnology(doorComponent1);

  return (
    <div className="md:my-20">
      {/* About ERP Corporate Training */}
      {/* <AboutSapImplementation
        // initialValue={0}
        // finalValue={15}
        // symbol="+"
        AboutSapImplementationData={aboutERP}
      /> */}
      <WhyChooseUs whyChooseUsData={aboutPage1}/>

      {/* ERP Training Details */}
      <ToolsAndTechnologiesWeUse ToolsAndTechnologiesWeUseData={doorComponent11} />

      {/* ERP Corporate Training Details */}
      {/* <AboutSapImplementation AboutSapImplementationData={corporateTrainingDetails} /> */}
      <WhyChooseUs whyChooseUsData={aboutPage2}/>
    </div>
  );
};

export default ERPCorporateTraining;
