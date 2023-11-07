import Title from "../../components/Title";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiGift } from "react-icons/fi";
import { PiBookBookmarkLight } from "react-icons/pi";
import { BsCalculator } from "react-icons/bs";

const Facilities = () => {
    return (
        <div>
            <Title>Our Facilities</Title>
            <div className="max-w-[1500px] px-16 mx-auto font-poppins">
                <h2 className="py-4 text-xl">Here some reason to choose us.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-6">
                    <div className="card border-2">
                        <div className="card-body items-center text-center px-12">
                            <h2><FiGift className="text-7xl text-[#FF9606]"></FiGift></h2>
                            <h2 className="card-title py-3 border-b-4 border-double border-black">Free Gift Wrap</h2>
                            <p className=" font-medium">Free gift wrapping on all purchases. Wrapping includes a blue box with your choice with Ribbon.</p>
                            <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FF9606] text-white font-bold mt-5">1</h2>
                            <div className="flex items-center py-3">
                                <button className="p-3 border-2">Read More</button>
                            </div>

                        </div>
                    </div>
                    <div className="card border-2">
                        <div className="card-body items-center text-center px-12">
                            <h2><PiBookBookmarkLight className="text-7xl text-[#FF9606]"></PiBookBookmarkLight></h2>
                            <h2 className="card-title py-3 border-b-4 border-double border-black">Buy Used Books</h2>
                            <p className=" font-medium">We provide you the best selling of the used books. You can sell them to us if you have read them once.</p>
                            <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FF9606] text-white font-bold mt-5">2</h2>
                            <div className="flex items-center py-3">
                                <button className="p-3 border-2">Read More</button>
                            </div>

                        </div>
                    </div>
                    <div className="card border-2">
                        <div className="card-body items-center text-center px-12">
                            <h2><FaMapLocationDot className="text-7xl text-[#FF9606]"></FaMapLocationDot></h2>
                            <h2 className="card-title py-3 border-b-4 border-double border-black">Free Shipping</h2>
                            <p className=" font-medium">We provide free shipping over the $1000 purchase from one country to another with extra discount.</p>
                            <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FF9606] text-white font-bold mt-5">3</h2>
                            <div className="flex items-center py-3">
                                <button className="p-3 border-2">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="card border-2">
                        <div className="card-body items-center text-center px-12">
                            <h2><BsCalculator className="text-7xl text-[#FF9606]"></BsCalculator></h2>
                            <h2 className="card-title py-3 border-b-4 border-double border-black">Returns & Exchange</h2>
                            <p className=" font-medium">Return and Exchange is possible in 5 days. In case of lost or damage Return & Exchange is not possible.</p>
                            <h2 className="w-10 h-10 pt-2 rounded-full bg-[#FF9606] text-white font-bold mt-5">4</h2>
                            <div className="flex items-center py-3">
                                <button className="p-3 border-2">Read More</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facilities;