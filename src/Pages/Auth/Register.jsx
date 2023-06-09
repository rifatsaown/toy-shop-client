import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  useTitle("Register");
  const navigate = useNavigate();
  const { registerWithEmail } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoUrl = e.target.photoUrl.value;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    registerWithEmail(email, password)
      .then((res) => {
        toast.success("Register Success");
        profile(res.user, name, photoUrl);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const profile = (currentUser, name, photoUrl) => {
    updateProfile(currentUser, { displayName: name, photoURL: photoUrl });
  };

  return (
    <div className="hero max-h-screen pt-20 sm:pt-20">
      <div className="">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card flex-shrink-0 w-full lg:w-96 max-w-sm shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Name *</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email *</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password *</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="PhotoUrl"
                    className="input input-bordered"
                  />
                </div>
                <label className="label">
                  <p className="label-text-alt ">
                    Already in <span className="font-bold">BD Lego?</span>{" "}
                    <Link to="/login" className="link link-hover text-primary">
                      Log In
                    </Link>
                  </p>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
