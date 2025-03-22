import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";

// DATA
import data from "@/data/Services/S4RisePrivateCloud/about.json";
import {
  getBenefitsComponent,
  getSolutionsGQL,
} from "@/lib/graphql/extractSolutionsPages";
import { itemsUploader } from "@/lib/uploader/uploader";

const S4RisePrivateCloud = async () => {
  const aboutData = data.Data;

  const keyFeatures = data.keyFeatures;

  const whyData = data.why;

  const useCaseData = data.useCases;

  //     useCaseData.items.map((item) => {
  //     itemsUploader({ name: item.name, description: item.description });
  //   });

  const {
    aboutPage1,
    aboutPage2,
    benefitsComponent1,
    benefitsComponent2,
    benefitsComponent3,
  } = (await getSolutionsGQL("cJjHJqxBiu023cUdi7xeh")).data.contentPage;

  if (
    !aboutPage1 ||
    !aboutPage2 ||
    !benefitsComponent1 ||
    !benefitsComponent2 ||
    !benefitsComponent3
  ) {
    return <div>NADA</div>;
  }

  const benefits1 = getBenefitsComponent(benefitsComponent1);
  const benefits2 = getBenefitsComponent(benefitsComponent2);
  const benefits3 = getBenefitsComponent(benefitsComponent3);

  return (
    <div className="md:my-20">
      {/* <AboutSapImplementation AboutSapImplementationData={aboutData}/> */}
      <WhyChooseUs whyChooseUsData={aboutPage1} />

      <KeyFeatureSapImplementation Data={benefits1} />

      <BenefitsSapImplementation Data={benefits2} />

      <div className="md:h-32"></div>

      <KeyFeatureSapImplementation Data={benefits3} />

      <div className="mx-10 md:mx-40 flex items-center justify-center flex-col mt-20 gap-10">
        <div className="text-2xl font-bold">{aboutPage2.heading}</div>
        <div className="text-lg text-center bg-gray-300 rounded-lg p-4">
          {aboutPage2.description}
        </div>
      </div>
    </div>
  );
};

export default S4RisePrivateCloud;
