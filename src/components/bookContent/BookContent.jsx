import { useLoaderData } from "react-router-dom";
import Title from "../Title";

const BookContent = () => {
    const text = useLoaderData();
    // console.log(text);
    const {read, name} =  text
    return (
        <div>
            <Title>Book Content</Title>
            <div className="max-w-[1500px] mx-auto px-16 md:h-[60vh] flex flex-col justify-center">
                <h2 className="md:text-4xl text-xl font-bold py-16">Book Name: {name}</h2>
                <h2><span className="text-4xl">Read: </span>{read}</h2>
            </div>
        </div>
    );
};

export default BookContent;