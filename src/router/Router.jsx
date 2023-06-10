import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Pages/Error/ErrorPage";
import Addtoys from "../Pages/Toys/AddToys";

const router = createBrowserRouter([
    { path: '/', element: <App /> ,
    children: [
        { path: '/', element: <Home/> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/>},
        { path: '/addtoys', element: <Addtoys/>}
      ]
    },
    { path: '*', element: <ErrorPage />}
  ]);

export default router;
  