import banner1 from "../../assets/banner-1.png"
import banner2 from "../../assets/banner-2.png"
import banner3 from "../../assets/banner-3.png"
const Banner = () => {
    return (
        <div className="carousel w-full font-poppins">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="hero-overlay bg-opacity-60">
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left- right-0 top-1/2 hero-overlay">
                        <a href="#slide4" className="btn btn-circle ml-3">❮</a>
                        <div className="hero-content text-white">
                            <div className="text-center">
                                <h1 className="text-2xl font-semibold py-6">ARE YOU SEARCHING A BOOK...?</h1>
                                <h1 className="mb-5 text-5xl font-bold">BIGGEST LIBRARY</h1>
                                <p className="mb-5">A library is a collection of books, and possibly other materials and media, <br /> that is accessible for use by its members and members of allied institutions.</p>
                                <button className="btn mt-3 text-white bg-[#ff9606]">Get Started</button>
                            </div>
                        </div>
                        <a href="#slide2" className="btn btn-circle mr-3">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left- right-0 top-1/2 hero-overlay hero-overlay">
                    <a href="#slide1" className="btn btn-circle ml-3">❮</a>
                    <div className="hero-content text-white">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold py-6">ARE YOU SEARCHING A BOOK...?</h1>
                            <h1 className="mb-5 text-5xl font-bold">BIGGEST LIBRARY</h1>
                            <p className="mb-5">A library is a collection of books, and possibly other materials and media, <br /> that is accessible for use by its members and members of allied institutions.</p>
                            <button className="btn mt-3 text-white bg-[#ff9606]">Get Started</button>
                        </div>
                    </div>
                    <a href="#slide3" className="btn btn-circle mr-3">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left- right-0 top-1/2 hero-overlay">
                    <a href="#slide2" className="btn btn-circle ml-3">❮</a>
                    <div className="hero-content text-white">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold py-6">ARE YOU SEARCHING A BOOK...?</h1>
                            <h1 className="mb-5 text-5xl font-bold">BIGGEST LIBRARY</h1>
                            <p className="mb-5">A library is a collection of books, and possibly other materials and media, <br /> that is accessible for use by its members and members of allied institutions.</p>
                            <button className="btn mt-3 text-white bg-[#ff9606]">Get Started</button>
                        </div>
                    </div>
                    <a href="#slide4" className="btn btn-circle mr-3">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="absolute flex justify-between items-center transform -translate-y-1/2 left- right-0 top-1/2 hero-overlay">
                    <a href="#slide3" className="btn btn-circle ml-3">❮</a>
                    <div className="hero-content text-white">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold py-6">ARE YOU SEARCHING A BOOK...?</h1>
                            <h1 className="mb-5 text-5xl font-bold">BIGGEST LIBRARY</h1>
                            <p className="mb-5">A library is a collection of books, and possibly other materials and media, <br /> that is accessible for use by its members and members of allied institutions.</p>
                            <button className="btn mt-3 text-white bg-[#ff9606]">Get Started</button>
                        </div>
                    </div>
                    <a href="#slide1" className="btn btn-circle mr-3">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;