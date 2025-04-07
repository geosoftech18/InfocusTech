import { fetchNewsById } from "@/actions/email/fetchNews";
import DetailedNewsPage from "./components/detailedNewsPage";
import { getFilteredNewsData } from "@/lib/filterEvents";

export type Params = Promise<{
  newsId: string;
}>;

const DetailedPage = async ({ params }: { params: Params }) => {
  const { newsId } = await params;

  // console.log(type)

  if (!newsId) {
    return (
      <div>data not fetched properly, newsId or imageId not available</div>
    );
  }
  //@ts-ignore
  const newsData = await fetchNewsById(newsId); //"32oXOR10xpXOykZo8GPOGp"

  //   console.log(newsData)

  // console.log(newsData)
  if (!newsData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">
          Error: {newsData.error + " " || "News or asset not found"}
        </p>
      </div>
    );
  }

  const data = getFilteredNewsData({
    items: [newsData],
  });

  //   console.log(data)

  return (
    <DetailedNewsPage
      title={data[0].title}
      content={data[0].content}
      date={data[0].date}
      imageUrl={data[0].imageUrl}
      id={data[0].id}
    />
  );
};

export default DetailedPage;
