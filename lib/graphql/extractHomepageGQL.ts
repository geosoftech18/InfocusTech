import { HomePageProps, HomePagePropsExpected } from "@/types/homepage";
import fetchGraphQL from "../contentful-graphql";

export async function getHomePageGQL() {
  const result = await fetchGraphQL(
    `query {
  homePage(id:"5wyHnlpY8asmjyc3PAnn0S"){
    heroItemsCollection{
      items{
        title,
        boldTitle,
        description
        ctabuttontext,
      }
    },
    whyChooseUs{
      heading,
      description,
      bulletPoints,
      whyChooseUsImage{
        url
      }
    },
    aboutUsTag,
    aboutUsHeading,
    aboutUsDescription,
    aboutUsBulletPoints,
    aboutusImage{
      url
    },
    yearsOfExperience,
    clientSatisfactionRate,
    projectsCreated,
    whyChooseUs{
      heading,
      description,
      whyChooseUsImage{
        url
      }
      bulletPoints
    }
    doorComponent{
      tag,
      heading,
      subheading,
      description
      itemsCollection{
        items{
          name,
          description,
          link,
          image{
            url
          }
        }
      }
    }
    industryExpertiseTag,
    industryExpertiseTitle,
    industryExpertiseDescription,
    itemsCollection{
      items{
        name,
        description,
        link,
        image{
          url
        }
      }
    }
    testimonialsCollection{
      items{
        name,
        description,
        link,
        image{
          url
        }
      }
    }
    domesticClientsCollection{
      items{
        name,
        description,
        link,
        image{
        title,
          url
        }
      }
    }
    internationalClientsCollection{
      items{
        name,
        description,
        link,
        image{
        title,
          url
        }
      }
    }
    faqsbulletpointsCollection{
      items{
        title,
        description
      }
    }
  }
}`,
    { next: { revalidate: 3600 } }
  );
  // console.log(result);

  // const heroData=extractHeroItems(result.heroItemsCollection.items);
  const homepage = extractHomePage(result.data.homePage);
  // console.log(homepage);
  return homepage;
}

function extractHomePage(
  homepageData: HomePageProps
): HomePagePropsExpected | null {
  const aboutUsData = {
    tag: homepageData.aboutUsTag,
    heading: homepageData.aboutUsHeading as string,
    description: homepageData.aboutUsDescription as string,
    imageUrl: homepageData.aboutusImage.url,
    yearsOfExperience: homepageData.yearsOfExperience as number,
    clientSatisfactionRate: homepageData.clientSatisfactionRate as number,
    projectsCreated: homepageData.projectsCreated as number,
  };
  const visionMissionQualityData =
    homepageData.aboutUsBulletPoints.visionMissionQualityData;

  const whyChooseUsData = extractWhyChooseUs(homepageData.whyChooseUs);
  const doorComponentData = extractDoorComponent(homepageData.doorComponent);
  const IndustriesWeServeData = extractIndustryExpertise(homepageData);
  const TestimonialsData = extractTestimonials(
    homepageData.testimonialsCollection.items
  );
  const domesticClients = extractClients(
    homepageData.domesticClientsCollection.items
  );
  const internationalClients = extractClients(
    homepageData.internationalClientsCollection.items
  );
  const faqsData = extractFaqs(homepageData.faqsbulletpointsCollection.items);
  const heroData = extractHeroItems(homepageData.heroItemsCollection.items);

  if (
    !aboutUsData ||
    !visionMissionQualityData ||
    !whyChooseUsData ||
    !doorComponentData ||
    !IndustriesWeServeData ||
    !TestimonialsData ||
    !domesticClients ||
    !internationalClients ||
    !faqsData ||
    ! heroData
  ) {
    return null;
  }

  return {
    heroData,
    aboutUsData,
    visionMissionQualityData,
    whyChooseUsData,
    doorComponentData,
    IndustriesWeServeData,
    TestimonialsData,
    domesticClients,
    internationalClients,
    faqsData,
  };
}

function extractHeroItems(heroItems: any) {
  return heroItems.map((item: any) => ({
    title: item.title,
    boldTitle: item.boldTitle,
    description: item.description,
    cta_button_text: item.ctabuttontext,
  }));
}

function extractWhyChooseUs(fields: any) {
  if (!fields) return null;
  return {
    heading: fields.heading,
    description: fields.description,
    bulletPoints: fields.bulletPoints,
    imagePath: fields.whyChooseUsImage.url,
  };
}

export function extractDoorComponent(fields: any) {
  return {
    tag: fields.tag as string,
    heading: fields.heading as string,
    Subheading: fields.subheading as string,
    description: fields.description as string,
    items: fields.itemsCollection.items.map((item: any) => ({
      name: item.name,
      imagePath: item.image?.url,
      description: item.description,
      link: item.link,
    })),
  };
}

function extractIndustryExpertise(fields: HomePageProps) {
  return {
    tag: fields.industryExpertiseTag,
    heading: fields.industryExpertiseTitle,
    description: fields.industryExpertiseDescription,
    items: fields.itemsCollection.items.map(
      (item: any) => ({
        name: item.name,
        description: item.description,
        link: item.link,
        imagePath: item.image.url,
      })
    ),
  };
}

function extractTestimonials(testimonials: any) {
  return testimonials.map((item: any) => ({
    name: item.name,
    comment: item.description,
    role: item.link,
    imageUrl: item.image.url,
  }));
}

function extractClients(clients: any) {
  return clients.map((item: any) => ({
    name: item.image.title,
    imagePath: item.image.url,
    title: item.name,
    description: item.description,
  }));
}

function extractFaqs(faqsbulletpoints: any) {
  return faqsbulletpoints.map((item: any) => ({
    title: item.title,
    description: item.description,
  }));
}
