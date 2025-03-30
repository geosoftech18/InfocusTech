"use client";
import { FilteredNewsItem } from "@/components/pages/newsPage/newsPage";
import { motion } from "framer-motion";

const DetailedNewsPage: React.FC<FilteredNewsItem> = ({
  title,
  content,
  imageUrl,
  date,
}) => {
  return (
    <div className="min-h-screen flex items-start bg-gray-100">
      <div className="w-full bg-white shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center w-full bg-black">
          <motion.img
            src={imageUrl || "/emp1.jpg"}
            alt="News Image"
            className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative flex flex-col items-center text-center px-4 sm:px-10 z-10">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {title || "News Title"}
            </motion.h1>

            <motion.p
              className="text-gray-300 text-xs sm:text-sm md:text-base mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {date}
            </motion.p>
          </div>
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-10 font-bold text-sm sm:text-lg md:text-xl flex items-center">
            <div className="text-[#b00d07] mr-2">{"Home"}</div>
            <div className="text-white">{"> News and Events"}</div>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-6 sm:py-10 flex flex-col gap-6 sm:gap-8">
          <motion.div
            className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {content || "News content goes here."}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DetailedNewsPage;
