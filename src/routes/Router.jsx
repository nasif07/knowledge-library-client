import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import Signup from "../Pages/signin/Signup";
import ErrorPage from "../Pages/errorPage/ErrorPage";
import AddBook from "../Pages/addBook/AddBook";
import PrivateRoute from "../protectedRoute/PrivateRoute";
import CategoryWiseBooks from "../components/bookcategory/CategoryWiseBooks";
import AllBooks from "../Pages/allBooks/allBooks";
import UpdateBooks from "../Pages/updateBooks/UpdateBooks";
import BookDetailes from "../components/bookDetails/BookDetailes";
import BookContent from "../components/bookContent/BookContent";
import BorrowedBooks from "../Pages/borrowedBooks/BorrowedBooks";

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
        path: "/addbook/:email",
        element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
      },
      {
        path: "/books/:category",
        element: <CategoryWiseBooks></CategoryWiseBooks>,
        loader: () => fetch('https://knowledge-library-server.vercel.app/allbooks')
      },
      {
        path: "/borrowedbook",
        element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
        path: "/bookdetails/:id",
        element: <PrivateRoute><BookDetailes></BookDetailes></PrivateRoute>,
        loader: ({params}) => fetch(`https://knowledge-library-server.vercel.app/allbooks/${params.id}`)
      },
      {
        path: "/bookcontent/:id",
        element: <PrivateRoute><BookContent></BookContent></PrivateRoute>,
        loader: ({params}) => fetch(`https://knowledge-library-server.vercel.app/allbooks/${params.id}`)
      },
      {
        path:"/allbooks",
        element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        // loader: () => fetch('https://knowledge-library-server.vercel.app/allbooks')
      },
      {
        path: "/allbooks/updatebook/:updatebooks",
        element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
        loader: ({params}) => fetch(`https://knowledge-library-server.vercel.app/allbooks/${params.updatebooks}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      }
    ],
    
  },
]);

export default router;