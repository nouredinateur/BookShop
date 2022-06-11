const SearchInputComponent = ({ onChange, value }: SearchInputProps) => {
    return (
        <div className="flex-row ">
            <input type="text" value={value} onChange={onChange} placeholder="Search by title" className="flex-1 p-4 pl-10 w-3/5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
    )
}
interface SearchInputProps {
    onChange: (e: any) => void;
    value: any;
}

export default SearchInputComponent;