import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://knowledge-library-server.vercel.app/allcategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    // console.log(categories);
    return (
        <div>
            <Title>Categories</Title>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1500px] mx-auto px-16 gap-6 my-12">
                {
                    categories.map(category => <Category category={category} key={category.categoryImage}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;