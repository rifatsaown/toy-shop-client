import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  );
}

export default App;
