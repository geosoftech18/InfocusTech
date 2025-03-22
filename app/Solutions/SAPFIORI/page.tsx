// Import JSON data
import aboutUsData from "@/data/Solutions/SAPFIORI/about.json";
import whyData from "@/data/Solutions/SAPFIORI/why.json";
import keyBenefitsData from "@/data/Solutions/SAPFIORI/keyBenefits.json";

// Extract relevant data
const { aboutUsJSON } = aboutUsData;
const { whyJSON } = whyData;
const { keyBenefits } = keyBenefitsData;

// Import Components
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import { itemsUploader } from "@/lib/uploader/uploader";
import { getBenefitsComponent, getSolutionsGQL } from "@/lib/graphql/extractSolutionsPages";

const SAPFIORI = async() => {
  // keyBenefits.items.map((item) => {
  //   itemsUploader({ name: item.name, description: item.description });
  // });

   const {
        aboutPage1,
        aboutPage2,
        benefitsComponent1,
      } = (await getSolutionsGQL("4E0u20SClH3UlZYPyS4DY9")).data.contentPage;
    
      if (
        !aboutPage1 ||
        !aboutPage2 ||
        !benefitsComponent1 
      ) {
        return <div>NADA</div>;
      }
      const benefits1 = getBenefitsComponent(benefitsComponent1);


  return (
    <div className="pt-20 md:pt-0 pb-20 md:pb-5">
      {/* Introduction & Why SAP FIORI */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />
      <WhyChooseUs basis="textRight" whyChooseUsData={aboutPage2} />

      {/* Key Benefits - User-Centered Design */}
      <BenefitsSapImplementation Data={benefits1} />

    </div>
  );
};

export default SAPFIORI;
