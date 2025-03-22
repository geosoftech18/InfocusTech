// Import JSON data
import aboutData from "@/data/Solutions/SAPPIXI/about.json";
import aboutXIData from "@/data/Solutions/SAPPIXI/aboutXI.json";

// Extract relevant data
const { aboutJSON } = aboutData;
const { aboutSAPXI } = aboutXIData;

// Import Components
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import PISuccessStory from "@/components/pages/Solutions/PISuccessStory";
import { getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";

const SAPPIXI = async() => {


  const {
          aboutPage1,
          aboutPage2,
          aboutPage3,
        } = (await getSolutionsGQL("1udBk5OYxaBhGbyaERi7Kp")).data.contentPage;
      
        if (
          !aboutPage1 ||
          !aboutPage2 ||
          !aboutPage3
        ) {
          return <div>NADA</div>;
        }
  


  return (
    <div className="pt-20 md:pt-0">
      {/* Introduction to SAP PI/XI */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />
      <WhyChooseUs basis="textRight" whyChooseUsData={aboutPage2} />

      {/* PI Success Story */}
      <PISuccessStory heading={aboutPage3.heading} description={aboutPage3.description} imageUrl={aboutPage3.whyChooseUsImage.url}/>
    </div>
  );
};

export default SAPPIXI;
