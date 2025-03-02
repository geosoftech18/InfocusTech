// Import JSON data
import aboutData from "@/data/Solutions/IntegrationwithICICIBank/about.json";

// Extract relevant data
const { aboutJSON } = aboutData;

// Import Component
import WhyChooseUs from "@/components/pages/home/whyChooseUs";

const IntegrationwithICICIBank = () => {
  return (
    <div>
      {/* Why Choose Us Section */}
      <WhyChooseUs whyChooseUsData={aboutJSON} />
    </div>
  );
};

export default IntegrationwithICICIBank;
