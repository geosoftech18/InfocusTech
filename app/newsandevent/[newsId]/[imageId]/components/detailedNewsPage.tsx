"use client";
import { NewsCardProps } from "../../../components/newsCard";
import { motion } from "framer-motion";

const DetailedNewsPage: React.FC<NewsCardProps> = ({
  title,
  content,
  imageUrl,
  date,
}) => {
  return (
    <div className="min-h-screen flex items-start justify-center px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg overflow-hidden">
        {/* Image Section */}
        <motion.img
          src={imageUrl || "/emp1.jpg"}
          alt={title || "News Image"}
          className="w-full h-64 md:h-80 object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content Section */}
        <div className="px-6 sm:px-10 lg:px-40 py-10 flex flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <motion.h1
              className="text-2xl sm:text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {title || "News Title"}
            </motion.h1>

            <motion.p
              className="text-gray-600 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>
          </div>

          <motion.div
            className="text-gray-700 leading-relaxed text-base sm:text-lg"
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
