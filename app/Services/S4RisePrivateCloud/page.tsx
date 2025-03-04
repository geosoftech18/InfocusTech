import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";



// DATA
import data from "@/data/Services/S4RisePrivateCloud/about.json"

const S4RisePrivateCloud = () => {

    const aboutData=data.Data;

    const keyFeatures= data.keyFeatures;

    const whyData= data.why

    const useCaseData = data.useCases

    return ( 
        <div>
            <AboutSapImplementation AboutSapImplementationData={aboutData}/>

            <KeyFeatureSapImplementation KeyFeatureSapImplementationData={keyFeatures}/>

            <BenefitsSapImplementation BenefitSapImplementationData={whyData}/>

            <div className="h-20"></div>

            <KeyFeatureSapImplementation KeyFeatureSapImplementationData={useCaseData}/>

            <div className="mx-10 md:mx-40 flex items-center justify-center flex-col mt-20 gap-10">
                <div className="text-2xl font-bold">Conclusion</div>
                <div className="text-lg text-center bg-gray-300 rounded-lg p-4">S/4HANA Rise Private Cloud is an ideal choice for enterprises aiming for agility, efficiency, and digital transformation. By leveraging SAP&apos;s cutting-edge technology, businesses can innovate faster and stay ahead in a competitive market.</div>
            </div>
        </div>
     );
}
 
export default S4RisePrivateCloud;