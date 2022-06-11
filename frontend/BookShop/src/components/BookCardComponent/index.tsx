const BookCardComponent = ({ book }: IBookCardComponentProps) => {
    const { title, author, genre } = book;
    return (
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{author}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{genre}</p>
        </div>
    );
}
interface IBookCardComponentProps {
    book: any;
    title: string;
    author: string;
    genre: string;
}
export default BookCardComponent;