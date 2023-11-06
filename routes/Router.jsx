import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "../src/Pages/home/Home";
import Login from "../src/Pages/login/Login";
import Signup from "../src/Pages/signin/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <h2>this is error</h2>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        }
      ]
    },
  ]);

export default router;