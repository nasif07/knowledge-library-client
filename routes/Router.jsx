import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import Home from "../src/Pages/home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <h2>this is error</h2>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
      ]
    },
  ]);

export default router;