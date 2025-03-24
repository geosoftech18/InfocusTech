"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FilteredNewsItem } from "./newsPage";



const NewsCard: React.FC<FilteredNewsItem> = ({
  type,
  date,
  title,
  content,
  imageUrl,
  id
}) => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!id || !type ) {
    return <div>data not fetched properly, imageId and entryId not found</div>;
  }
  return (
    <Link href={`${currentUrl}/${type}/${id}`}>
      <Card className="max-w-md w-full p-4 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
        <Image
          src={imageUrl}
          alt=""
          width={400}
          height={200}
          className="w-full h-48 object-contain rounded-lg"
        />
        <CardContent className="p-4 space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {date}
          </p>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
            {content}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default NewsCard;
