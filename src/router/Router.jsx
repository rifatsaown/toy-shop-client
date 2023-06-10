import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import Addtoys from "../Pages/Toys/AddToys";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../Pages/Toys/AllToys";
import SingleToy from "../Pages/Toys/SingleToy";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    { path: '/', element: <App /> ,
    children: [
        { path: '/', element: <Home/> },
        { path: '/login', element: <Login/> },
        {
          path: '/blog', element: <Blog/>
        },
        { path: '/register', element: <Register/>},
        { path: '/alltoys', element: <AllToys/>},
        {
          path: '/toys/:id',
          element: <PrivateRoute><SingleToy/></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
        },
        { path: '/addtoys', element: <PrivateRoute><Addtoys/></PrivateRoute>}
      ]
    },
    { path: '*', element: <ErrorPage />}
  ]);

export default router;
  