import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import AllBooks from "../pages/AllBooks.jsx";
import MyBooks from "../pages/MyBooks.jsx";

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
        path: "all-books",
        Component: AllBooks
      },
      {
        path: "add-book",
        Component: MyBooks
      },
      {
        path: "my-books",
        Component: MyBooks
      }
    ]
  },
]);