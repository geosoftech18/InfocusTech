import { DoorComponent, DoorComponentItem, WhyChooseUs } from "./homepage";

export interface BenefitsComponent{
    tag:string,
    itemsCollection:{
        items:DoorComponentItem[]
    }
}
export type CustomerSuccessStory = {
    tag:string,
    title:string,
    description:string,
    itemsCollection: {
      items: {
        title: string;
        description: string | null;
        morePoints: string[] | null;
      }[];
    };
  };
  
export interface getSolutionsGQLResult{
    data:{
        contentPage:ContentPage
    }
}
export interface ContentPage {
    pageTitle: string,
    aboutPage1: WhyChooseUs|null;
    aboutPage2: WhyChooseUs|null;
    aboutPage3: WhyChooseUs|null;
    doorComponent1: DoorComponent|null;
    doorComponent2: DoorComponent|null;
    doorComponent3: DoorComponent|null;
    benefitsComponent1: BenefitsComponent|null;
    benefitsComponent2: BenefitsComponent|null;
    benefitsComponent3: BenefitsComponent|null;
    customerSuccessStory: CustomerSuccessStory|null;
    customerSuccessStory1: CustomerSuccessStory|null
  }
