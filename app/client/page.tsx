"use client";
import ClientCard from "@/components/pages/client/clientCard";
import { useState } from "react";

// data

import data from "@/data/clients/data.json";

const Client = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const domesticClients = data.domesticClients;

  const internationalClients = data.internationalClients;

  return (
    <div className="mx-40 flex flex-col items-center justify-center gap-10 my-20">
      {/* heading */}
      <Heading title={"Our Domestic Clients"} />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
        {domesticClients.map((item, index) => (
          <ClientCard
            key={index}
            index={index}
            hovered={hovered === index}
            setHovered={setHovered}
            imagePath={item.imagePath}
            name={item.name}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      <Heading title={"Our International Clients"} />

      <div className="grid grid-cols-1 md:grid-cols-3  gap-5">
        {internationalClients.map((item, index) => (
          <ClientCard
            key={index}
            index={index}
            hovered={hovered === index}
            setHovered={setHovered}
            imagePath={item.imagePath}
            name={item.name}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

const Heading = ({ title }: { title: string }) => {
  return <div className="text-2xl font-semibold">{title}</div>;
};

export default Client;
