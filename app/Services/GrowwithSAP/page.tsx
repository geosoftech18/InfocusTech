import AboutSapImplementation from "@/components/pages/services/sapImplementation/aboutSapImplementation";
import BenefitsSapImplementation from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";



// DATA
import data from "@/data/Services/GrowwithSAP/data.json"

const GrowwithSAP = () => {

    const aboutData=data.Data;

    const keyFeatures= data.keyFeatures;

    const whyData= data.why

    const useCaseData = data.useCases

    const Conclusion=data.conclusion

    return ( 
        <div>
            <AboutSapImplementation AboutSapImplementationData={aboutData}/>

            <KeyFeatureSapImplementation KeyFeatureSapImplementationData={keyFeatures}/>

            <BenefitsSapImplementation BenefitSapImplementationData={whyData}/>

            <div className="h-20"></div>

            <KeyFeatureSapImplementation KeyFeatureSapImplementationData={useCaseData}/>

            <div className="md:mx-40 flex items-center justify-center flex-col mt-20 gap-10">
                <div className="text-2xl font-bold">Conclusion</div>
                <div className="text-lg text-center bg-gray-300 rounded-lg p-4">
                    {Conclusion.description}
                </div>
            </div>
        </div>
     );
}
 
export default GrowwithSAP;