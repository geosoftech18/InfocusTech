import { CarouselNext, CarouselPrevious } from "./carousel";

const NavButtons = () => {
  return (
    <>
      <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md " />
      <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md " />
    </>
  );
};

export default NavButtons;
