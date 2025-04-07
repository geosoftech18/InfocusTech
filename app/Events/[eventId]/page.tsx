import { fetchEventById, fetchNewsById } from "@/actions/email/fetchNews";
import DetailedNewsPage from "./components/detailedNewsPage";
import { getFilteredNewsData } from "@/lib/filterEvents";

export type Params = Promise<{
  eventId: string;
}>;

const DetailedPage = async ({ params }: { params: Params }) => {
  const { eventId } = await params;

  // console.log(type)

  if (!eventId) {
    return (
      <div>data not fetched properly, eventId or imageId not available</div>
    );
  }
  const newsData = await fetchEventById(eventId); //"32oXOR10xpXOykZo8GPOGp"

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
