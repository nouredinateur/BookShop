import { useGetBooksQuery } from '../../api/apiSlice'
import BookCardComponent from '../../components/BookCardComponent'
import SpinnerComponent from '../../components/SpinnerComponent'
import ErrorComponent from '../../components/ErrorComponent';
const BooksDetailsScreen = () => {
    const { data: books, error, isError, isLoading, isSuccess } = useGetBooksQuery({})
    if (isLoading) {
        return (
            <SpinnerComponent />
        )
    }
    if (isError) {
        return (
            <ErrorComponent />
        )
    }

    console.log(books["hydra:member"])
    return (
        <div>
            {isSuccess && books["hydra:member"]?.map((book) => {
                return (
                    <BookCardComponent key={book.id} book={book} />
                )
            })
            }
        </div>
    );
}
export default BooksDetailsScreen;