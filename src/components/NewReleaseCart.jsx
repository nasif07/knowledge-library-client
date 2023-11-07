import img1 from '../assets/img-07.jpg'
import img2 from '../assets/img-08.jpg'
import img3 from '../assets/img-09.jpg'
const NewReleaseCart = () => {
    return (
        <>
        <div className="w-full max-w-sm bg-white">
            <a href="#">
                <img className="rounded-t-lg" src={img1} alt="product image" />
            </a>
            <div className="pb-5">
                <h3 className=' font-semibold text-lg py-4 text-[#484848]'>Adventure, fun</h3>
                <hr />
                <a href="#">
                    <h5 className="text-[20px] font-semibold tracking-tight text-gray-700 py-5">Help Me Find My Stomach</h5>
                </a>
                <h3 className='font-medium text-[#484848]'>By: kathrine Culbertson</h3>
                <div className="flex items-center mt-2.5 mb-5">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
            </div>
        </div>
        <div className="w-full max-w-sm bg-white">
            <a href="#">
                <img className="rounded-t-lg" src={img2} alt="product image" />
            </a>
            <div className="pb-5">
                <h3 className=' font-semibold text-lg py-4 text-[#484848]'>Adventure, fun</h3>
                <hr />
                <a href="#">
                    <h5 className="text-[20px] font-semibold tracking-tight text-gray-700 py-5">Drive Safely, No Bumping</h5>
                </a>
                <h3 className='font-medium text-[#484848]'>By: Sunshine Orlando</h3>
                <div className="flex items-center mt-2.5 mb-5">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
            </div>
        </div>
        <div className="w-full max-w-sm bg-white">
            <a href="#">
                <img className="rounded-t-lg" src={img3} alt="product image" />
            </a>
            <div className="pb-5">
                <h3 className=' font-semibold text-lg py-4 text-[#484848]'>Adventure, fun</h3>
                <hr />
                <a href="#">
                    <h5 className="text-[20px] font-semibold tracking-tight text-gray-700 py-5">Let The Good Times Roll Up</h5>
                </a>
                <h3 className='font-medium text-[#484848]'>By: Elisabeth Ronning</h3>
                <div className="flex items-center mt-2.5 mb-5">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <svg key={index} className="w-4 h-4 text-yellow-300 mr-1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>
            </div>
        </div>
        </>
    );
};

export default NewReleaseCart;