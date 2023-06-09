import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import profilephoto from "../../assets/avater.jpg";
import icon from "../../assets/lego.svg";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user , logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Logout Success");
    }).catch((error) => {
      toast.error(error.message);
    });
  }

  const link = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>All Toys</a>
      </li>
      {user && (
        <>
          <li>
            <a>My Toys</a>
          </li>
          <li>
            <a>Add a Toys</a>
          </li>
        </>
      )}
      <li>
        <a>Blogs</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {link}
          </ul>
        </div>
        <div className="btn btn-ghost">
        <img className="w-7 mr-2" src={icon} alt="" />
        <a className=" normal-case text-xl">BD LEGO</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL?.length > 5 ? user.photoURL : profilephoto
                    }
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu text-white menu-compact dropdown-content mt-3 p-2 bg-primary-focus rounded-box w-52"
              >
                <li>
                  <NavLink to="/profile" className="justify-between">
                    {user.displayName ? user.displayName : "Profile"}
                  </NavLink>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn m-1 btn-primary">
              Log IN
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
