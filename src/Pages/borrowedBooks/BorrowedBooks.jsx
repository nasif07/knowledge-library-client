import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Title from "../../components/Title";
import BorrowedRow from "./BorrowedRow";
import swal from "sweetalert";

const BorrowedBooks = () => {

    const { user } = useContext(AuthContext)
    const [borrowedBook, setBorrowedBook] = useState([])

    const url = `https://knowledge-library-server.vercel.app/borrowed?email=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBorrowedBook(data))
    }, [])
    console.log(borrowedBook);

    const handleReturn = id => {
        fetch(`https://knowledge-library-server.vercel.app/borrowed/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                swal("returned!", "Book Return successfull!", "success");
                const remaining  = borrowedBook.filter(singleBook => singleBook._id !== id )
                setBorrowedBook(remaining);
            }
        })
    }


    return (
        <div className="pb-20">
            <Title>Your Borrowed Books</Title>
            <div className="overflow-x-auto max-w-[1500px] mx-auto px-10 pt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>About Book</th>
                            <th>Borrowed Date</th>
                            <th>Return Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            borrowedBook.map(borrowed => <BorrowedRow borrowed={borrowed} handleReturn={handleReturn} key={borrowed._id}></BorrowedRow>)
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;