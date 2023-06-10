import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  console.log(location);
  const from = location.state?.from || "/";
  const navigate = useNavigate();
  const { signInWithGoogle, signInWithEmail } = useContext(AuthContext);

  // Email and password login
  const handleSubmit = (e) => {
    toast.info("Please wait... ");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmail(email, password)
      .then(() => {
        toast.success("Login Success");
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Create sign in with google function
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Login Success with Google");
        navigate(from);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div
      className="hero max-h-screen pt-20 sm:pt-20"
    >
      <div >
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card flex-shrink-0 w-full lg:w-96 max-w-sm drop-shadow-2xl bg-base-200">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control ">
                <a
                  onClick={handleGoogleSignIn}
                  className="btn btn-primary btn-outline"
                >
                  Login With Google
                </a>
              </div>
              <div className="flex items-center lg:my-4">
                <div className="w-full h-[1.5px] bg-primary"></div>
                <span className="mx-3">OR</span>
                <div className="w-full h-[1.5px] bg-primary"></div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <p className="label-text-alt ">
                    New in <span className="font-bold">BD Lego</span>?{" "}
                    <Link
                      to="/register"
                      className="link link-hover text-primary"
                    >
                      Register Now
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
