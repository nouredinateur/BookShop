const BookCardComponent = ({ book }: { book: any }) => {
    const { title, author, genre, } = book as IBookCardComponentProps;
    return (
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">Author: {author.firstName}{' '}{author.lastName}</p>
            <p className=" font-normal text-gray-700 dark:text-gray-400">Genre: {genre}</p>
        </div>
    );
}
interface IBookCardComponentProps {
    title: string;
    author: any;
    genre: string;
}
export default BookCardComponent;