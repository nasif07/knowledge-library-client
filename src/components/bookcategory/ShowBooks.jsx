import { Link } from "react-router-dom";

const ShowBooks = ({ book }) => {
    const { AuthorName, Category, Image, Name, Quantity, Rating, ShortDescription } = book;
    return (
        <div className="w-full bg-white  font-poppins max-w-[270px] mx-auto border rounded-lg mb-6">
            <div className="flex items-center justify-center pt-4">
                <img className="rounded-t-lg h-[250px] w-[180px]" src={Image} alt="product image" />
            </div>
            <div className="pb-5 px-5">
                <h3 className=' font-semibold text-lg py-4 text-[#484848]'>{Category}</h3>
                <a href="#">
                    <h5 className="text-[20px] font-semibold tracking-tight text-gray-700 py-5">{Name}</h5>
                </a>
                <h3 className='font-medium text-[#484848]'>By: {AuthorName}</h3>
                <div className="flex items-center mt-2.5">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
                <Link><button className="btn bg-[#F99206] text-white hover:text-black normal-case mb-2 mt-4">Details</button></Link>
            </div>
        </div>
    );
};

export default ShowBooks;