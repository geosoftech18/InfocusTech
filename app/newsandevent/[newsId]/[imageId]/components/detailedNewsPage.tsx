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
    <div className="min-h-screen flex items-start justify-center ">
      <div className="w-full h-full bg-white shadow-lg  overflow-hidden">
        {/* Image Section */}
        <motion.img
          src={imageUrl || "/emp1.jpg"}
          alt={""}
          className="w-full h-64 object-cover"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Content Section */}
        <div className="mx-40 my-20 flex flex-col gap-20">
          <div className="flex items-center justify-between">
            <motion.h1
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {title || "dawdw"}
            </motion.h1>

            <motion.p
              className="text-gray-600 mb-4 text-sm"
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
            className="text-gray-700 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {content || "fseseffs"}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DetailedNewsPage;
