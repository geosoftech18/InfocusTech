// Import JSON data
import aboutData from "@/data/Solutions/IntegrationwithICICIBank/about.json";

// Extract relevant data
const { aboutJSON } = aboutData;

// Import Component
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import { getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";

const IntegrationwithICICIBank = async() => {

  const {
        aboutPage1,
      } = (await getSolutionsGQL("jXZOCpLTD8dnoGlEtUWJX")).data.contentPage;
    
      if (
        !aboutPage1 
      ) {
        return <div>NADA</div>;
      }


  return (
    <div>
      {/* Why Choose Us Section */}
      <WhyChooseUs buttonText="Get 40% off on SAP Integration Setup & Other ICICI API Integration" isHomepage={true} whyChooseUsData={aboutPage1} />
    </div>
  );
};

export default IntegrationwithICICIBank;
