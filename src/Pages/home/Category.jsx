

const Category = ({ category }) => {
    const { categoryName, categoryImage } = category;
    console.log(category);
    return (
        <div className="card rounded-xl card-compact border font-poppins">
            <figure><img className="h-[230px]" src={categoryImage} alt="Shoes" /></figure>
            <div className="card-body bg-[#2A2A2A] rounded-b-xl">
                <h2 className="text-center font-bold text-2xl text-white pb-2">{categoryName}</h2>
                <button className="btn bg-[#F99206] text-white hover:text-black normal-case mb-2">See available books...</button>
            </div>
        </div>
    );
};

export default Category;