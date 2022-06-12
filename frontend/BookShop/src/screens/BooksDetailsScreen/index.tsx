import { useParams, useNavigate } from "react-router-dom";
import BookCardDetailsComponent from "../../components/BookCardDetailsComponent";
import SpinnerComponent from "../../components/SpinnerComponent";
import ErrorComponent from "../../components/ErrorComponent";
import { useGetBookQuery } from "../../api/apiSlice";
import ReviewComponent from "../../components/ReviewComponent";
const BooksDetailsScreen = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id } = params;
  const {
    data: book,
    isLoading,
    error,
    isSuccess,
    isError,
  } = useGetBookQuery(id);
  if (isLoading) {
    return <SpinnerComponent />;
  }
  if (isError) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="w-full">
      <BookCardDetailsComponent book={book} />
      <div className="w-3/5 mx-auto pb-16">
        <button
          onClick={() => navigate("/")}
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BooksDetailsScreen;
