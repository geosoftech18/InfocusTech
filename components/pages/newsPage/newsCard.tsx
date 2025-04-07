"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";
import { FilteredNewsItem } from "./newsPage";
import { motion } from "framer-motion";

const NewsCard: React.FC<FilteredNewsItem> = ({
  type,
  date,
  title,
  content,
  imageUrl,
  id,
}) => {
  const [currentUrl] = useState(
    typeof window !== "undefined" ? window.location.href : ""
  );
  const [isHovered, setIsHovered] = useState(false);

  if (!id || !type) {
    return <div>data not fetched properly, imageId and entryId not found</div>;
  }

  return (
    <motion.div
      initial={false}
      animate={{
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden h-full shadow-2xl border rounded-2xl"
    >
      <Link
        href={`${currentUrl}/${type}/${id}`}
        className=""
      >
        {/* White shadow animation - Fixed version */}
        <motion.div
          initial={{ opacity: 0, left: "50%", right: "50%" }}
          animate={
            isHovered
              ? {
                  opacity: 1,
                  left: "-100%",
                  right: "-100%",
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }
              : {
                  opacity: 0,
                  left: "100%",
                  right: "100%",
                  transition: {
                    duration: 0.6,
                    ease: "easeInOut",
                  },
                }
          }
          className="absolute top-0 h-full bg-gradient-to-r from-white/30 via-transparent to-white/30 pointer-events-none"
        />

        <Card className="max-w-md w-full p-4  h-full border-none rounded-2xl bg-white dark:bg-gray-800">
          <Image
            src={imageUrl}
            alt=""
            width={400}
            height={200}
            className="w-full h-48 object-contain rounded-lg"
          />
          <CardContent className="p-4 space-y-2">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {date}
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <div className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
              {content}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default NewsCard;
