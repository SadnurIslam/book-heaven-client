import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import AllBooks from "../pages/AllBooks.jsx";
import MyBooks from "../pages/MyBooks.jsx";
import AddBooks from "../pages/AddBooks.jsx";
import Register from "../pages/Register.jsx";
import BookDetails from "../pages/BookDetails.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "all-books",
        Component: AllBooks
      },
      {
        path: "add-book",
        element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
      },
      {
        path: "my-books",
        element: <PrivateRoute><MyBooks></MyBooks></PrivateRoute>
      },
      {
        path: "book-details",
        Component: BookDetails
      }
    ]
  },
]);