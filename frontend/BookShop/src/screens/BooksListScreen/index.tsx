import { useNavigate } from "react-router";
import { useGetBooksQuery, useGetBookByTitleQuery } from "../../api/apiSlice";
import BookCardComponent from "../../components/BookCardComponent";
import SpinnerComponent from "../../components/SpinnerComponent";
import ErrorComponent from "../../components/ErrorComponent";
import SearchInputComponent from "../../components/SearchInputComponent";
import { useState } from "react";
const BooksDetailsScreen = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {
        data: books,
        error,
        isError,
        isLoading,
        isSuccess,
    } = useGetBooksQuery({});
    const { data: result, isSuccess: searchIsSuccess } =
        useGetBookByTitleQuery(searchTerm);

    const navigate = useNavigate();
    if (isLoading) {
        return <SpinnerComponent />;
    }

    if (isError) {
        return <ErrorComponent error={error} />;
    }

    console.log("result", result);
    return (
        <div className="px-40 py-20 w-full h-max ">
            <div className="mx-16 my-10">
                <SearchInputComponent
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                    }}
                />
            </div>
            <div className="grid gap-4 grid-cols-3 grid-rows-3 w-full flex ml-16 ">
                {searchIsSuccess
                    ? result["hydra:member"]?.map((book: any) => {
                        return (
                            <BookCardComponent
                                onClick={() => navigate(`/book/${book.id}`)}
                                key={book.id}
                                book={book}
                            />
                        );
                    })
                    : books["hydra:member"]?.map((book: any) => {
                        return (
                            <BookCardComponent
                                onClick={() => navigate(`/book/${book.id}`)}
                                key={book.id}
                                book={book}
                            />
                        );
                    })}
            </div>
        </div>
    );
};
export default BooksDetailsScreen;
