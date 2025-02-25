import DoorComponent from "@/components/pages/home/whatWeOffer";
import WhyChooseUs from "@/components/pages/home/whyChooseUs";
import KeyFeatureSapImplementation from "@/components/pages/services/sapImplementation/keyFeaturesSapImplementation";
import ToolsAndTechnologiesWeUse from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import {aboutMining,SAPforMining,ComoditySCM,howSAPSolutionsHelp,benefitsMining} from "@/data/IndustryExpertise/mining.json"

const Mining = () => {
    return ( 
        <div>
            <WhyChooseUs whyChooseUsData={aboutMining}/>

            {/* comodity SCM */}

            <ToolsAndTechnologiesWeUse scroll={true} ToolsAndTechnologiesWeUseData={ComoditySCM}/>

            {/* how SAP solutins help */}

            <DoorComponent Data={howSAPSolutionsHelp}/>

            <div className="h-20"></div>

            <KeyFeatureSapImplementation KeyFeatureSapImplementationData={benefitsMining}/>

            <WhyChooseUs whyChooseUsData={SAPforMining}/>
        </div>
     );
}
 
export default Mining;