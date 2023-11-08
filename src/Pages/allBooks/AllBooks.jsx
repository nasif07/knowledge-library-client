import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import ShowAllBooks from "./ShowAllBooks";

const AllBooks = () => {
    const allBooks = useLoaderData();
    console.log(allBooks);

    return (
        <div className="max-w-[1500px] mx-auto px-16 py-10">
            <Title>All Books</Title>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
                {allBooks.map(book => <ShowAllBooks key={book._id} book={book}></ShowAllBooks>)}
            </div>
        </div>
    );
};

export default AllBooks;