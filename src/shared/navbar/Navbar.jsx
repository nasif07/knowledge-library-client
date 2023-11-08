import { Link, NavLink } from "react-router-dom";

import { PiBookOpenText } from 'react-icons/pi';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const [theme, setTheme] = useState("light")

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
            <NavLink to={`/addbook/${user?.email}`} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold text-xl underline" : ""}>Add Book
            </NavLink>
        </li>
        <li>
            <NavLink to="/allbooks" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold text-xl" : ""}> All Books
            </NavLink>
        </li>
        <li>
            <NavLink to="" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline font-bold text-xl" : ""}>Borrowed Books
            </NavLink>
        </li>
    </>
    useEffect(() => {
        // localStorage.setItem("theme", theme);
        // const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", theme)
    },[theme])
    const handleToggle = (e) => {
        if(e.target.checked){
            setTheme("dark")
        }
        else{
            setTheme("light")
        }
    }

    return (
        <>
            <div>
                {
                    user ? <><div className="py-2 bg-[#191919] text-white font-poppins text-center">
                        <h1 className="text-sm">Welcome {user.displayName} ❤️‍🔥❤️‍🔥. now you can see all our available books and borrowed the books.</h1>
                    </div></> : ""
                }
            </div>
            <div className="bg-[#FF9606] font-poppins">
                <div className="navbar  max-w-[1500px] px-3 mx-auto md:px-16">
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
                            <h4 className="md:text-2xl text-xl font-bold text-white font-kanit hidden md:block">Knowledge Library</h4>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" menu-horizontal gap-5 font-semibold text-white">
                            {items}
                        </ul>
                    </div>
                    <div className="navbar-end">
                    <div className="w-10 mr-3">
                            {
                                user ? <img className="rounded-full" src={`${user?.photoURL}`} />
                                    : ""
                            }
                        </div>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input onChange={handleToggle} type="checkbox" />

                            {/* sun icon */}
                            <svg className="swap-on fill-current w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off text-white fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
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
        </>
    );
};

export default Navbar;