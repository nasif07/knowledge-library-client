import { Link, NavLink } from "react-router-dom";

import { PiBookOpenText } from 'react-icons/pi';
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut();
    }


    const items = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "btn" : isActive ? "font-bold text-xl  underline" : ""}>Home
            </NavLink>
        </li>
        <li>
            <NavLink to="/addproduct" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-xl underline" : ""}>Add Book
            </NavLink>
        </li>
        <li>
            <NavLink to="/mycart" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold text-xl" : ""}> All Books
            </NavLink>
        </li>
        <li>
            <NavLink to="/signup" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold text-xl" : ""}>Borrowed Books
            </NavLink>
        </li>
    </>

    return (
        <div className="bg-[#FF9606] font-poppins">
            <div className="navbar  max-w-[1500px] mx-auto px-16">
                <div className="navbar-start">
                    <div className="dropdown text-white">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#FF9606] rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <div className="md:flex justify-center items-center gap-4">
                        <PiBookOpenText className="text-4xl text-[white]"></PiBookOpenText>
                        <h4 className="md:text-2xl text-xl font-bold text-white font-kanit">Knowledge Library</h4>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal gap-5 font-semibold text-white">
                        {items}
                    </ul>
                </div>
                <div className="navbar-end">
                    {

                        user ?
                            <button onClick={handleLogOut} className="btn ml-4">Log out</button>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;