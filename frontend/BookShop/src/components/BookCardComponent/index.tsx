const BookCardComponent = ({ book, onClick }: { book: any, onClick: () => void }) => {

    const { title, author, genre, } = book as IBookCardComponentProps;
    return (
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-medium text-gray-700 dark:text-gray-400">Author: {author.firstName}{' '}{author.lastName}</p>
            <p className=" font-normal text-gray-700 dark:text-gray-400">Genre: {genre}</p>
            <div className="pt-6">
                <button onClick={onClick} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Read more</button>
            </div>
        </div>
    );
}
interface IBookCardComponentProps {
    title: string;
    author: any;
    genre: string;
}
export default BookCardComponent;