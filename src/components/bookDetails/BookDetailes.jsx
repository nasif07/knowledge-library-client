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
                <div className=" max-w-[650px] mx-auto border mb-16 font-poppins flex flex-col md:flex-row items-center">
                    <div className="flex justify-center">
                        <img className="py-12 h-[400px] md:h-full max-w-[300px] pl-5" src={image} />
                    </div>
                    <div className="justify-normal flex flex-col gap-5 px-3">
                        <h2 className=""><span className=" text-2xl font-bold">Book Name:</span>{name}</h2>
                        <p><span className=" font-bold">Author Name: </span>{authorName}</p>
                        <p><span className=" font-bold">Category: </span>{category}</p>
                        <p><span className=" font-bold">Description: </span>{shortDescription}</p>
                        <div className="card-actions justify-between items-center">
                            <button className="p-3 border-2 border-black hover:bg-[#FF9606] hover:text-white transition rounded-full text-black">Borrow</button>
                            <Link to={`/bookcontent/${_id}`}><button className="p-3 border-2 border-black hover:bg-[#FF9606] hover:text-white transition rounded-full px-4 text-black">Read</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailes;