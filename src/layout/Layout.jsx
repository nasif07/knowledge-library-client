import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Layout;