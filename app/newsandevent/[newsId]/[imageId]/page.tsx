import { fetchAssetById, fetchNewsById } from "@/actions/email/fetchNews";
import DetailedNewsPage from "./components/detailedNewsPage";

// export type NewsEntrySkeleton = {
//   contentTypeId: "news";
//   fields: {
//     title: contentful.EntryFieldTypes.RichText;
//     image: contentful.EntryFieldTypes.AssetLink;
//     content: contentful.EntryFieldTypes.RichText;
//     date: contentful.EntryFieldTypes.Date;
//   };
// };

interface NewsEntryResponse {
  success: boolean;
  // data?: contentful.Entry<NewsEntrySkeleton, undefined, string>;
  data?: NewsItem;
  error?: string;
}

interface NewsAssetResponse {
  success: boolean;
  data?: Asset;
  error?: string;
}

export type Params = Promise<{
  newsId: string;
  imageId: string;
}>;

const DetailedPage = async ({ params }: { params: Params }) => {
  const { newsId, imageId } = await params;

  if (!newsId || !imageId) {
    return (
      <div>data not fetched properly, newsId or imageId not available</div>
    );
  }
  const newsData: NewsEntryResponse = await fetchNewsById(newsId); //"32oXOR10xpXOykZo8GPOGp"

  const assetData: NewsAssetResponse = await fetchAssetById(imageId);

  // console.log(newsData)
  if (
    !newsData.success ||
    !newsData.data ||
    !assetData.success ||
    !assetData.data
  ) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">
          Error:{" "}
          {newsData.error + " " + assetData.error || "News or asset not found"}
        </p>
      </div>
    );
  }

  const { fields } = newsData.data;

  // Extracting title from Rich Text
  const title = fields.title?.content?.[0]?.content?.[0]?.value || "Untitled";

  // // Extracting content
  const content =
    fields.content?.content?.[0]?.content?.[0]?.value || "Untitled";

  // // Extracting date
  const date = fields.date || new Date().toISOString();

  // Extracting Image URL
  const imageUrl = assetData.data.fields.file.url;

  return (
    <DetailedNewsPage
      title={title}
      content={content}
      date={date}
      imageUrl={imageUrl}
      // title={"title"}
      // content={"content"}
      // date={String(new Date())}
      // imageUrl={"/emp1.jpg"}
    />
  );
};

export default DetailedPage;
