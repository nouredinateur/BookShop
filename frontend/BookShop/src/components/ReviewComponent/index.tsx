const ReviewComponent = ({ review }: any) => {
  return (
    <a
      key={review.id}
      href="#"
      className="block p-6  my-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {review.fullName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {review.comment}
      </p>
    </a>
  );
};
export default ReviewComponent;
