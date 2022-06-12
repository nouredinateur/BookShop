import * as dayjs from "dayjs";
import ReviewComponent from "../ReviewComponent";
const BookCardDetailsComponent = ({ book }: any) => {
  const { id, title, author, genre, description, publicationDate, reviews } =
    book as IBookCardDetailsComponentProps;
  return (
    <>
      <div
        key={id}
        className="p-6 rounded-lg shadow-md w-3/5 h-96 bg-blue mx-auto my-24"
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className=" font-medium text-gray-700 dark:text-gray-400">
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Author:{" "}
          </span>
          {author.firstName}
          {"  "}
          {author.lastName}
        </p>
        <p className=" font-normal text-gray-700 dark:text-gray-400">
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Genre:{" "}
          </span>
          {genre}
        </p>
        <p className=" font-normal text-gray-700 dark:text-gray-400">
          <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            Published:{" "}
          </span>
          {dayjs(publicationDate).format("YYYY-MM-DD")}
        </p>
        <div className="w-3/5 mt-6">
          <p className=" font-normal text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      <div className="flex-row w-3/5 mx-auto pb-16 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Reviews
        </h5>
        {reviews.map((review: any, index: any) => (
          <ReviewComponent review={review} key={index} />
        ))}
      </div>
    </>
  );
};
interface IBookCardDetailsComponentProps {
  id: any;
  title: string;
  author: any;
  genre: string;
  description: string;
  publicationDate: any;
  reviews: any;
}
export default BookCardDetailsComponent;
