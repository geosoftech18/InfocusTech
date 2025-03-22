import { getHomePage, getEntryByID } from "@/actions/fetchHomepage";
import { DoorComponentData } from "@/components/pages/home/whatWeOffer";
import { getHomePageGQL } from "./graphql/extractHomepageGQL";

export async function extractHomePage() {
    // getHomePageGQL()
    const homepageData = await getHomePage();
    if (!homepageData.success || !homepageData.data) {
        console.log("NADA");
        return null;
    }


    const aboutUsProps = {
        aboutUsData: {
            tag: homepageData.data.fields.aboutUsTag as string,
            heading: homepageData.data.fields.aboutUsHeading as string,
            description: homepageData.data.fields.aboutUsDescription as string,
            //@ts-ignore
            imageUrl: homepageData.data.fields.aboutusImage?.fields.file.url as string,
            yearsOfExperience: homepageData.data.fields.yearsOfExperience as number,
            clientSatisfactionRate: homepageData.data.fields.clientSatisfactionRate as number,
            projectsCreated: homepageData.data.fields.projectsCreated as number,
        },
        //@ts-ignore
        visionMissionQualityData: homepageData.data.fields.aboutUsBulletPoints?.visionMissionQualityData,
    };
//@ts-ignore
    const whyChooseUsData = extractWhyChooseUs(homepageData.data.fields.whyChooseUs?.fields);
    //@ts-ignore
    const doorComponentData = await extractDoorComponent(homepageData.data.fields.doorComponent?.sys.id);
    const industryWiseExpertiseData = extractIndustryExpertise(homepageData.data.fields);
    const testimonials = extractTestimonials(homepageData.data.fields.testimonials);
    const domesticClients = extractClients(homepageData.data.fields.domesticClients);
    const internationalClients = extractClients(homepageData.data.fields.internationalClients);
    const faqs = extractFaqs(homepageData.data.fields.faqsbulletpoints);
    const heroItems = extractHeroItems(homepageData.data.fields.heroItems);

    if (
        !heroItems ||
        !aboutUsProps ||
        !whyChooseUsData ||
        !doorComponentData ||
        !industryWiseExpertiseData ||
        !testimonials ||
        !domesticClients ||
        !internationalClients ||
        !faqs
    ) {
        return null;
    }

    return {
        heroItems,
        aboutUsProps,
        whyChooseUsData,
        doorComponentData,
        industryWiseExpertiseData,
        testimonials,
        domesticClients,
        internationalClients,
        faqs,
    };
}

function extractHeroItems(heroItems:any){
    const heroData=heroItems.map((item:any)=>({
        title:item.fields.title,
        boldTitle:item.fields.boldTitle,
        description:item.fields.description,
        cta_button_text:item.fields.ctabuttontext
    })
    )
    // console.log(heroData)
    return heroData
}

function extractWhyChooseUs(fields:any){
    const whyChooseUsData={
        heading:fields.heading,
        description:fields.description,
        bulletPoints:fields.bulletPoints,
        imagePath:'https://'+fields.whyChooseUsImage.fields.file.url
    }

    return whyChooseUsData
}

async function extractDoorComponent(id:any):Promise<DoorComponentData|undefined>{
    // console.log(id)
    const response= await getEntryByID(id)

    if(!response.data){
        return ;
    }
    // console.log(response.data.fields)

    const fields = response.data.fields
    const doorComponentData={
         tag:fields.tag as string,
         heading:fields.heading as string,
         Subheading:fields.subheading as string,
         description:fields.description as string,
         //@ts-ignore
         items : fields.items?.map((item:any) => (
            // console.log(item.fields)
            {
            name: item.fields.name,
            imagePath: 'https:'+item.fields.image.fields.file.url, 
            description: item.fields.description ,
            link: item.fields.link 
          }
        ))

    }
    // console.log(doorComponentData)

    return doorComponentData;
}

function extractIndustryExpertise(fields:any){
    const industryExpertiseData={
        heading:fields.industryExpertiseTitle,
        description:fields.industryExpertiseDescription,
        items:fields.items.map((item:any)=>(
            {
            name:item.fields.name,
            description:item.fields.description,
            link:item.fields.link,
            imagePath:'https:'+item.fields.image.fields.file.url
        }
    )
    )
    }
    return industryExpertiseData
}

function extractTestimonials(testimonials:any){
    const testimonialsData=testimonials.map((item:any)=>({
        name:item.fields.name,
        comment:item.fields.description,
        role:item.fields.link,
        imageUrl:'https:'+item.fields.image.fields.file.url
    }))

    return testimonialsData
}

function extractClients(clients:any){
    const clientsData=clients.map((item:any)=>({
        name:item.fields.image.fields.title,
        imagePath:'https:'+item.fields.image.fields.file.url,
        title:item.fields.name,
        description:item.fields.description
    }))
    
    return clientsData
}

function extractFaqs(faqsbulletpoints:any){
    // console.log(faqsbulletpoints)

    const faqs = faqsbulletpoints.map((item:any)=>({
        title:item.fields.title,
        description:item.fields.description
    }))

    return faqs
}