import AccordionCard from "@/components/accordionCard";
import FlipCard from "@/components/ui/flipCard";
import data from "@/data/clients/data.json";
import { getHomePageGQL } from "@/lib/graphql/extractHomepageGQL";
import { HomePagePropsExpected } from "@/types/homepage";

const Client = async () => {
  // const domesticClients = data.domesticClients;

  // const internationalClients = data.internationalClients;

  const homepage: HomePagePropsExpected | null = await getHomePageGQL();

  if (!homepage) {
    return <div>NADA</div>;
  }

  const { domesticClients, internationalClients } = homepage;

  return (
    <div className="mx-10 md:mx-40 flex flex-col items-center justify-center gap-10 my-20">
      {/* heading */}
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
  );
};

const Heading = ({ title }: { title: string }) => {
  return <div className="text-3xl font-semibold">{title}</div>;
};

export default Client;
