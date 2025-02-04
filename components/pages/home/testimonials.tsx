import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const TestimonialItems = [
  {
    name: "Kevin Martin",
    comment:
      "Etiam imperdiet massa vitae sem vestibulum ut sem hendrerit pellentesque. Vivamus vulputate faucibus purus ac ultrices. Mauris orci turpis, semper a arcu a, consectetur congue eros.",
    role: "customer",
    imageUrl: "/testimonial-v1-1.jpg",
  },
  {
    name: "Kevin Martin",
    comment:
      "Etiam imperdiet massa vitae sem vestibulum ut sem hendrerit pellentesque. Vivamus vulputate faucibus purus ac ultrices. Mauris orci turpis, semper a arcu a, consectetur congue eros.",
    role: "customer",
    imageUrl: "/testimonial-v1-2.jpg",
  },
];

const Testimonial = () => {
  return (
    <div className="relative h-screen  py-32 grid grid-cols-12 ">
      <div className="hidden md:block md:col-span-4 bg-gray-200"></div>
      <div className="hidden  md:block col-span-12 md:col-span-8 bg-[#B00D07]"></div>

      <div className="absolute mt-36 lg:mt-auto px-10 inset-0 mx-auto max-w-5xl max-h-3xl flex items-center justify-center z-50">
        <Carousel
          className="mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
        >
          <CarouselContent>
            {TestimonialItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card className="shadow-lg border-0 bg-transparent flex flex-col md:flex-row gap-10 items-center justify-center">
                  <Image
                    alt=""
                    src={item.imageUrl}
                    width={1000}
                    height={1000}
                    className="rounded-lg"
                  />
                  <div className="flex items-center text-justify md:items-start flex-col justify-center">
                    <div>Our testimonials</div>
                    <p className="text-center font-bold text-4xl text-[#E60000] lg:text-gray-200">
                      {item.name}
                    </p>
                    <p className="mt-4 text-xl tracking-tighter text-gray-300 font-semibold">{item.comment}</p>
                    <p className="mt-4 text-xl text-white font-semibold">
                      {item.role}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute left-1/2 lg:left-full lg:bottom-2 lg:right-2 flex gap-2">
          <CarouselPrevious className="absolute -left-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" /> 
          <CarouselNext className="absolute -right-10 top-1/2 transform -translate-y-1/2 text-black bg-gray-200 rounded-full p-2 shadow-md hover:bg-gray-700" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonial;
