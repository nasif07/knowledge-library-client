// import { useLoaderData } from "react-router-dom";
import Title from "../../components/Title";
import ShowAllBooks from "./ShowAllBooks";
import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import axios from "axios"
import useAxios from "../../hook/useAxios";

const AllBooks = () => {
    // const allBooks = useLoaderData();
    // console.log(allBooks);
    const [quantity, setQuantity] = useState('');
    // const [allBooks, setAllBooks] = useState([]);
    // console.log(allbooks);

    // useEffect(() => {
    //     axios.get('https://knowledge-library-server.vercel.app/allbooks')
    //         .then((res) => setAllBooks(res.data))
    // }, [])


    const axios = useAxios();

    const getBooks = async () => {
        const res = await axios.get(`allbooks?sortField=quantity&sortOrder=${quantity}`);
        return res;
    }


    // const hanldeSort = () => {
    //     setQuantity('desc')
    //     const api = `allbooks?sortField=quantity&sortOrder=${quantity}`
    //     console.log(api);
    // }
    // const api = `allbooks?sortField=quantity&sortOrder=${quantity}`
    // console.log(api);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['books', quantity],
        queryFn: getBooks,
    })
    if(isLoading) {
        return <p>Loading...</p>
    }
    if(isError) {
        return <p>something went wrong {error}</p>
    }
    console.log(data);
    return (
        <div className="max-w-[1500px] mx-auto px-16 py-10">
            <Title>All Books</Title>
            <div>
                <button onClick={() => setQuantity('desc')} className="btn">Available Book</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-12">
                {data?.data?.map(book => <ShowAllBooks key={book._id} book={book}></ShowAllBooks>)}
            </div>
        </div>
    );
};

export default AllBooks;