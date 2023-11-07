import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Title from "../Title";
import ShowBooks from "./ShowBooks";

const CategoryWiseBooks = () => {

    const [books, setBooks] = useState([]);

    const name = useParams();
    const allBooks = useLoaderData();

    useEffect(() => {
        const findBook = allBooks.filter(selectBooks => selectBooks.Category == name.category);
        setBooks(findBook);
    }, [])
    console.log(books);
    return (
        <>

            <Title>Here Available books</Title>
            <div className="max-w-[1500px] px-16 mx-auto">
                <p className="pb-16">A library is a store house of knowledge.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {books.map(book => <ShowBooks key={book.name} book={book}></ShowBooks>)}
                </div>
            </div>
        </>
    );
};

export default CategoryWiseBooks;