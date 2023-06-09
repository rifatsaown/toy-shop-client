import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";

const router = createBrowserRouter([
    { path: '/', element: <App /> ,
    children: [
        { path: '/', element: <Home/> },
        { path: 'login', element: <Login/> },
        { path: 'register', element: <Register/>}
      ]
    }
  ]);

export default router;
  