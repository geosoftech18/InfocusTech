import { CarouselNext, CarouselPrevious } from "./carousel";

const NavButtons = () => {
  return (
    <>
      <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-400 rounded-full p-2 hover:scale-125 transition-transform duration-300  " />
      <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-400 rounded-full p-2 hover:scale-125 transition-transform duration-300  " />
    </>
  );
};

export default NavButtons;
