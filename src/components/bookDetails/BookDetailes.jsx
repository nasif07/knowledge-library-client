import { Link, useLoaderData } from "react-router-dom";
import Title from "../Title";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const BookDetailes = () => {
    const oneBook = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(user);
    const { authorName, category, image, name, quantity, rating, shortDescription, _id } = oneBook;

    const handleBorrowBook = e => {
        e.preventDefault();
        const returnDate = e.target.date.value;
        const email = user.email;
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const currentDate = month + "/" + date + "/" + year;
        const order = {
            name,
            email,
            returnDate,
            image,
            category,
            currentDate
        }
        console.log(order);
        fetch(`http://localhost:5000/borrowed?email=${user.email}`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast.success("Book Borrowed successfull!")
            }
        })
    }




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
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-outline rounded-full" onClick={() => document.getElementById('my_modal_1').showModal()}>Borrow</button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p>email: {user.email}</p>
                                    <p>name: {user.displayName}</p>
                                    <p className="py-4">Please field the form</p>
                                    <div>
                                        <form onSubmit={handleBorrowBook}>
                                            <p>return date</p>
                                            <input className="border-2" type="date" name="date" id="" />
                                            <button className="btn ml-4" type="submit">Submit</button>
                                        </form>
                                    </div>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                            <Link to={`/bookcontent/${_id}`}><button className="p-3 border-2 border-black hover:bg-[#FF9606] hover:text-white transition rounded-full px-4 text-black">Read</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailes;