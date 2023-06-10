import { useEffect, useState } from "react";
import Loader from "../Shared/Loader";
import { Link } from "react-router-dom";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/alllego")
      .then((response) => response.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.name.value;
    fetch(`http://localhost:5000/lego?toyname=${search}`)
      .then((response) => response.json())
      .then((data) => {
        if (typeof data === "object") {
          setToys([data]);
        } else {
          setToys(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mt-8">
      {/* search bar */}
      <div className="flex justify-center my-8">
        <form onSubmit={handleSearch} className="form-control ">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Searce by toy name"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      {/* table */}
      <div>
        {toys?.length > 0 ? (
          <div>
            <div className="overflow-x-auto">
              <table className="table table-zebra border border-black">
                {/* head */}
                <thead>
                  <tr>
                    <th>Seller</th>
                    <th>Toy Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Available Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {/* body */}
                  {toys.map((toy) => (
                    <tr key={toy._id}>
                      <td>{toy.sellerName}</td>
                      <td>{toy.toyname}</td>
                      <td>{toy.category}</td>
                      <td>${toy.price}</td>
                      <td>${toy.stock}</td>
                      <td>
                        <Link
                          to = {`/toys/${toy._id}`}
                          className="btn btn-primary btn-outline btn-sm"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center font-semibold text-3xl text-info pt-8">
            No toys Found
          </div>
        )}
      </div>
     
    </div>
  );
};

export default AllToys;
