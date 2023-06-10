import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Toy = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const { toyname, img, price, ratting, _id } = toy;
  const location = useLocation();
  const navigate = useNavigate();
  location.pathname = `/toys/${_id}`;
  const handleClicked = (id) => {
    if (!user) {
      toast.error("Please login first to see Detals About This Page");
      navigate("/login", { state: { from: location } });
    } else {
      navigate(`/toys/${id}`);
    }
  };

  return (
    <div className="m-2">
      <div className="card w-96 bg-base-00 shadow-2xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl h-36 w-32" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{toyname}</h2>
          <p>Price: {price}</p>
          <p>Ratting: {ratting}</p>
          <div className="card-actions">
            <button
              onClick={() => handleClicked(_id)}
              className="btn btn-primary"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toy;
