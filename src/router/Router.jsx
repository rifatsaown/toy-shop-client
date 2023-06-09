import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Hero";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
    { path: '/', element: <App /> ,
    children: [
        { path: '/', element: <Home/> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/>}
      ]
    },
    { path: '*', element: <ErrorPage />}
  ]);

export default router;
  