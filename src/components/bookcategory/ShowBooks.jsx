import { Link } from "react-router-dom";
import { Rating } from "@material-tailwind/react";

const ShowBooks = ({ book }) => {
    const { authorName, category, image, name, quantity, rating, shortDescription, _id } = book;


    function ReadonlyRating() {
        return <Rating value={parseFloat(rating)} readonly />;
    }
    return (
        <div className="w-full bg-white  font-poppins max-w-[270px] mx-auto border rounded-lg mb-6">
            <div className="flex items-center justify-center pt-4">
                <img className="rounded-t-lg h-[250px] w-[180px]" src={image} alt="product image" />
            </div>
            <div className="pb-5 px-5">
                <h3 className=' font-semibold text-lg py-4 text-[#484848]'>{category}</h3>
                <a href="#">
                    <h5 className="text-[20px] font-semibold tracking-tight text-gray-700 py-5">{name}</h5>
                </a>
                <h3 className='font-medium text-[#484848]'>By: {authorName}</h3>
                <div className="flex items-center mt-2.5">
                    {ReadonlyRating()}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{rating}</span>
                </div>
                <Link to={`/bookdetails/${_id}`}><button className="btn bg-[#F99206] text-white hover:text-black normal-case mb-2 mt-4">Details</button></Link>
            </div>
        </div>
    );
};

export default ShowBooks;