import { motion } from "framer-motion";
import { CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const CarouselNavigation = () => {
  return (
    <>
      <motion.div
        className="absolute left-14 md:left-10 top-1/2 transform -translate-y-1/2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <CarouselPrevious 
          className="w-8 h-8 md:w-12 md:h-12 text-white bg-gray-800 rounded-lg p-2 shadow-lg 
                    hover:bg-red-600 transition-colors duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        />
      </motion.div>
      
      <motion.div
        className="absolute right-14 md:right-10 top-1/2 transform -translate-y-1/2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <CarouselNext 
          className="w-8 h-8 md:w-12 md:h-12 text-white bg-gray-800 rounded-lg p-2 shadow-lg 
                    hover:bg-red-600 transition-colors duration-300
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        />
      </motion.div>
    </>
  );
};

export default CarouselNavigation