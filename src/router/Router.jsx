import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Pages/Home/Home";
import Addtoys from "../Pages/Toys/AddToys";
import AllToys from "../Pages/Toys/AllToys";
import MyToys from "../Pages/Toys/MyToys";
import SingleToy from "../Pages/Toys/SingleToy";
import ToyEdit from "../Pages/Toys/ToyEdit";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/blog",
        element: <Blog />,
      },
      { path: "/register", element: <Register /> },
      { path: "/alltoys", element: <AllToys /> },
      {
        path: "/toyedit/:id",
        element: (
          <PrivateRoute>
            <ToyEdit />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bd-lego-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <SingleToy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bd-lego-server.vercel.app/toys/${params.id}`),
      },
      {
        path: "/mytoys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/addtoys",
        element: (
          <PrivateRoute>
            <Addtoys />
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default router;
