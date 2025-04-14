import DoorComponent from "@/components/pages/home/whatWeOffer";
import CustomerSuccessStory from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";
import SapImplementationProcess from "@/components/pages/services/sapImplementation/sapImplementationProcess";
import { AnimatedButton } from "@/components/ui/animatedButton";
import UnderlineAnimation from "@/components/ui/slidingUnderline";
import { extractDoorComponent } from "@/lib/graphql/extractHomepageGQL";
import {
  getCustomerSuccessStory,
  getSolutionsGQL,
} from "@/lib/graphql/extractSolutionsPages";

const Product = async () => {
  const {
    aboutPage1,
    aboutPage2,
    doorComponent1,
    doorComponent2,
    customerSuccessStory,
    customerSuccessStory1,
  } = (await getSolutionsGQL("wrxiabcH90d9S0LCc2MpG")).data.contentPage;
  if (
    !aboutPage1 ||
    !aboutPage2 ||
    !doorComponent1 ||
    !doorComponent2 ||
    !customerSuccessStory ||
    !customerSuccessStory1
  ) {
    return <div>NADA</div>;
  }

  const door1 = extractDoorComponent(doorComponent1);
  const door2 = extractDoorComponent(doorComponent2);

  const story1 = getCustomerSuccessStory(customerSuccessStory);
  const story2 = getCustomerSuccessStory(customerSuccessStory1);

  return (
    <div>
      <DoorComponent Data={door1} />
      <div className="mx-5 md:mx-40 flex items-center justify-center flex-col my-10 md:my-32 gap-5 md:gap-10">
        <div className="text-2xl md:text-3xl font-semibold text-center">
          {aboutPage1.heading}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {aboutPage1.bulletPoints.map((item, index) => (
            <div
              className="p-5 bg-gray-200 rounded-lg shadow-md text-center"
              key={index}
            >
              <UnderlineAnimation>{item}</UnderlineAnimation>
            </div>
          ))}
        </div>
      </div>
      <SapImplementationProcess cards={5} SapImplemetationProcessData={door2} />
      <CustomerSuccessStory CustomerSuccessStoryData={story1} />
      <CustomerSuccessStory CustomerSuccessStoryData={story2} />
      <div className="p-10 md:p-20 mx-10 md:mx-40 flex items-start justify-center flex-col md:my-32 gap-10 bg-gray-200">
        <div className="text-xl md:text-3xl font-medium">{aboutPage2.heading}</div>
        <AnimatedButton size={"lg"}>{aboutPage2.description}</AnimatedButton>
      </div>
    </div>
  );
};

export default Product;
