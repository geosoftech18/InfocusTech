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

const SAPFIORI = () => {
  return (
    <div>
      {/* Introduction & Why SAP FIORI */}
      <WhyChooseUs whyChooseUsData={aboutUsJSON} />
      <WhyChooseUs basis="textRight" whyChooseUsData={whyJSON} />

      {/* Key Benefits - User-Centered Design */}
      <BenefitsSapImplementation BenefitSapImplementationData={keyBenefits} />
    </div>
  );
};

export default SAPFIORI;
