import { BenefitsComponent, CustomerSuccessStory, getSolutionsGQLResult} from "@/types/Solutions";
import fetchGraphQL from "../contentful-graphql";
import { ToolsAndTechnologiesWeUseData } from "@/components/pages/services/sapImplementation/tools&TechnologiesWeUse";
import { DoorComponent, DoorComponentItem } from "@/types/homepage";
import { BenefitsData } from "@/components/pages/services/sapImplementation/benefitsSapImplementation";
import { title } from "process";
import { CustomerSuccessStoryData, CustomerSuccessStoryProps } from "@/components/pages/IndustryExpertise/customerSuccessStoryComponent";

export async function getSolutionsGQL(id: string):Promise<getSolutionsGQLResult> {
  const result = await fetchGraphQL(
    `query {
  contentPage(id: "${id}") {
    pageTitle,
    aboutPage1{
      heading,
      description,
      bulletPoints,
      whyChooseUsImage{
        url
      }
    },
    aboutPage2{
      heading,
      description,
      bulletPoints,
      whyChooseUsImage{
        url
      }
    },
    aboutPage3{
      heading,
      description,
      bulletPoints,
      whyChooseUsImage{
        url
      }
    },
    doorComponent1{
      tag,
      heading,
      subheading,
      description,
      doorComponentBg{
        url
      }
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
    },
    doorComponent2{
      tag,
      heading,
      subheading,
      description,
      doorComponentBg{
        url
      },
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
    },
    doorComponent3{
      tag,
      heading,
      subheading,
      description,
      doorComponentBg{
        url
      },
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
    },
    benefitsComponent1{
      tag,
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
    },
    benefitsComponent2{
      tag,
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
    },
    benefitsComponent3{
      tag,
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
      customerSuccessStory {
      tag
      title
      description
      itemsCollection {
        items {
          title
          description
          morePoints
        }
      }
    }
    customerSuccessStory1 {
      tag
      title
      description
      itemsCollection {
        items {
          title
          description
          morePoints
        }
      }
    }
  }
    }`,
    { next: { revalidate: 3600 } }
  );

  // console.log(result)
  return result
}

export function getToolsandTechnology(items:DoorComponent):ToolsAndTechnologiesWeUseData{
    return{
        Tag:items.tag,
        Title:items.heading,
        Description:items.description,
        Tool:items.itemsCollection.items.map((item:DoorComponentItem)=>({
            imagePath:item.image.url,
            name:item.name,
            description:item.description,

        }))

    }
}
export function getBenefitsComponent(items:BenefitsComponent):BenefitsData{
    return{
        tag:items.tag,
        items:items.itemsCollection.items.map((item:DoorComponentItem)=>({
            imagePath:item.image.url,
            name:item.name,
            description:item.description,

        }))

    }
}

export function getCustomerSuccessStory(items:CustomerSuccessStory):CustomerSuccessStoryData{
  return {
    tag:items.tag,
    title:items.title,
    description:items.description,
    items: items.itemsCollection.items.map((item)=>({
      title:item.title,
      content: Array.isArray(item.morePoints)
        ? item.morePoints.map((item)=>({ point:item }))
        : item.description ?? "",
    }))
    
  }
}
// export function getSAPS4HANA():SAPS4HANA{
//     const res=getSolutionsGQL("2NA0KWWJOTBjn3eNaFTKG9");

//     return {
//         aboutPage1:res.aboutPage1,
//             doorComponent1:resDoorComponent,
//             doorComponent2:DoorComponent
//     }
// }
