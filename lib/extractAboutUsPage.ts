import { getEntryByID } from "@/actions/fetchHomepage";
import { CorePointsData } from "@/components/pages/aboutUs/corePoints";
import {
  ManagementTeamData,
} from "@/components/pages/aboutUs/managementTeam";

export default async function extractAboutUsPage() {
  const aboutUsPage = await getEntryByID("2UzVaLml0V6P6YuON3xw4P");

  const corePointsData: CorePointsData = {
    title: aboutUsPage.data?.fields.corePointsTitle as string,
    subTitle: aboutUsPage.data?.fields.corePointsDescription as string,
    //@ts-ignore
    cardData: aboutUsPage.data?.fields.corePointsData?.map((item: any) => ({
      number: item.fields.description,
      symbol: item.fields.link,
      caption: item.fields.name,
      imagePath: "https:" + item.fields.image.fields.file.url,
    })),
  };

  const ManagementTeamData: ManagementTeamData = {
    tag: aboutUsPage.data?.fields.ourTeamTag as string,
    title: aboutUsPage.data?.fields.ourTeamTitle as string,
    //@ts-ignore
    team: aboutUsPage.data?.fields.ourTeamItems?.map((item: any) => ({
      name: item.fields.name,
      role: item.fields.description,
      linkedinLink: item.fields.link,
      imagePath: "https:" + item.fields.image.fields.file.url,
    })),
  };

//   console.log(corePointsData,ManagementTeamData)
  return { corePointsData, ManagementTeamData };
}
