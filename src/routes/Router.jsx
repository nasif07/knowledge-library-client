import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Signup from "../Pages/signin/Signup";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import AddBook from "../Pages/addBook/AddBook";
import PrivateRoute from "../protectedRoute/PrivateRoute";
import CategoryWiseBooks from "../components/bookcategory/CategoryWiseBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addbook",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: "/allbooks/:category",
        element: <CategoryWiseBooks></CategoryWiseBooks>,
        loader: () => fetch('http://localhost:5000/allbooks')
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