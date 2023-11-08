import { Link, useLoaderData } from "react-router-dom";
import Title from "../Title";

const BookDetailes = () => {
    const oneBook = useLoaderData()
    const { authorName, category, image, name, quantity, rating, shortDescription, _id } = oneBook;
    return (
        <div>
            <Title>Book Details</Title>
            <div className="max-w-[1500px] mx-auto px-6 md:px-0">
                {/* <div className="text-center font-kanit pt-12">
                <h1 className="font-bold text-4xl md:text-6xl pb-8"><span className="">Here</span> Your Dream Car Details</h1>
                <p className="md:text-xl mb-12">Buy car Buy happiness</p>
            </div> */}
                <div className="card max-w-[600px] mx-auto border mb-16 font-kanit">
                    <div className="flex items-center justify-center">
                        <img className="p-12 max-w-[300px]" src={image} />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title pb-4"><span className=" text-3xl font-bold">Book Name:</span>{name}</h2>
                        <p><span className=" font-bold">Author Name: </span>{authorName}</p>
                        <p><span className=" font-bold">Category: </span>{category}</p>
                        <p><span className=" font-bold">Description: </span>{shortDescription}</p>
                        <div className="card-actions justify-between items-center pt-12">
                            <button className="btn text-white bg-[#FF9606]">Borrow</button>
                            <button className="btn text-white bg-[#FF9606]">Read</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailes;