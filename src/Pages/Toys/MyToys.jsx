import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../Shared/Loader";
import Toy from "./Toy";

const MyToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  // Fetch all toys of a user
  useEffect(() => {
    fetch(`https://bd-lego-server.vercel.app/mytoys/?sellerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setToys(data);
      });
  }, [user]);
  // sort toys by price from api call
  const handleSort = () => {
    fetch(`https://bd-lego-server.vercel.app/sort/?sellerEmail=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setToys(data);
      });
  };

  // Delete a toy
  const handleRemove = (id) => {
    Swal.fire({
      // make all text white
      customClass: {
        title: "text-white",
      },
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: "#171212",
      showCancelButton: true,
      confirmButtonColor: "#1eb854",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://bd-lego-server.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingToys = toys.filter((toy) => toy._id !== id);
              setToys(remainingToys);
              Swal.fire({
                customClass: {
                  title: "text-white",
                },
                title: "Success!",
                text: " Toy Deleted Successfully!",
                icon: "success",
                background: "#171212",
                confirmButtonColor: "#1eb854",
                confirmButtonText: "OK",
              });
            }
          });
      }
    });
  };

  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {toys.length > 0 ? (
            <div>
              <h1 className="text-center text-3xl my-4 font-bold">My Toys</h1>
              <div onClick={handleSort} className="text-right mb-3">
              <button className="btn btn-primary">
               Sort By Price
              </button>
              </div>
              <div>
                {toys.map((toy, index) => (
                  <Toy handleRemove={handleRemove} toy={toy} key={index} />
                ))}
              </div>
            </div>
          ) : (
            <h1 className="text-center text-3xl my-4 font-semibold">
              You Have No Toys Please{" "}
              <Link className="link font-bold" to="/addtoys">
                Add Some
              </Link>
            </h1>
          )}
        </>
      )}
    </div>
  );
};

export default MyToys;
