import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";

// Import JSON file using default import
import customerSuccessStoryDataFile from "@/data/IndustryExpertise/Cement.json";

// Extract necessary data
const customerSuccessStoryDataCement = customerSuccessStoryDataFile.CustomerSuccessStoryDataCement;

const Cement = () => {
  return <CustomerSuccessStory CustomerSuccessStoryData={customerSuccessStoryDataCement} />;
};

export default Cement;
