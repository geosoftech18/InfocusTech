import AccordionCard from "@/components/accordionCard";
import FlipCard from "@/components/ui/flipCard";
import data from "@/data/clients/data.json";
import fetchGraphQL from "@/lib/contentful-graphql";
import { getHomePageGQL } from "@/lib/graphql/extractHomepageGQL";
import { HomePagePropsExpected } from "@/types/homepage";
import Image from "next/image";

const Client = async () => {
  // const domesticClients = data.domesticClients;

  // const internationalClients = data.internationalClients;
  const query = `query{
  asset(id:"61IswiAzPrPLawm0chlXn"){
    title,
    url
  }
}`;
  const bgImage: {
    data: {
      asset: {
        title: string;
        url: string;
      };
    };
  } = await fetchGraphQL(query, { next: { revalidate: 0 } });

  const homepage: HomePagePropsExpected | null = await getHomePageGQL();

  // console.log(bgImage)
  if (!homepage || !bgImage.data.asset.title || !bgImage.data.asset.url) {
    return <div>NADA</div>;
  }

  const { domesticClients, internationalClients } = homepage;

  return (
    <div>
      {/* heading */}
      <div className="relative h-[40vh] w-full flex items-center justify-start ">
        <Image
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={bgImage.data.asset.url || ""}
          alt="News and Events"
          layout="fill"
          priority
        />
        <div className="relative  font-bold text-2xl  px-4 py-2 rounded-lg flex items-center justify-center">
          <div className="text-[#b00d07] mr-2">{"Home "}</div>
          <div>{" > Clients"}</div>
        </div>
      </div>
      <div className="mx-10 md:mx-40 flex flex-col items-center justify-center gap-10 my-20">
        <Heading title={"Our Domestic Clients"} />

        <div className="grid grid-cols-2 md:grid-cols-4  gap-5">
          {domesticClients.map((item, index) => (
            <FlipCard
              imagePath={item.imagePath}
              title={item.title}
              description={item.description}
              name={item.name}
              key={index}
              index={index.toString()}
            />
          ))}
        </div>

        <Heading title={"Our International Clients"} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {internationalClients.map((item, index) => (
            // <AccordionCard
            //   imagePath={item.imagePath}
            //   title={item.title}
            //   description={item.description}
            //   name={item.name}
            //   key={index}
            //   index={index.toString()}
            // />
            // <ClientCard
            //   isSmallScreen={isSmallScreen}
            //   key={index}
            //   index={index}
            //   hovered={hovered === index}
            //   setHovered={setHovered}
            //   imagePath={item.imagePath}
            //   name={item.name}
            //   title={item.title}
            //   description={item.description}
            // />
            <FlipCard
              imagePath={item.imagePath}
              title={item.title}
              description={item.description}
              name={item.name}
              key={index}
              index={index.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Heading = ({ title }: { title: string }) => {
  return <div className="text-3xl font-semibold">{title}</div>;
};

export default Client;
