import { useContext } from "react";
import { toast } from "react-toastify";
import useTitle from "../../Hooks/useTitle";
import { AuthContext } from "../../Provider/AuthProvider";

const Addtoys = () => {
  useTitle("Add Toys");
  const { user } = useContext(AuthContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    const toy = {
      img: e.target.image.value,
      toyname: e.target.toyname.value,
      sellerName: user.displayName,
      sellerEmail: user.email,
      category: e.target.category.value === "-----Select-----" ? "undefined": e.target.category.value ,
      price: parseFloat(e.target.price.value),
      ratting: parseFloat(e.target.ratting.value),
      stock: parseInt(e.target.stock.value),
      description: e.target.description.value,
    };

    // post data to server
    fetch("http://localhost:5000/addlego", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then(() => {
        toast.success("Toy Added Successfully");
        e.target.reset();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="lg:w-8/12 mx-auto my-8">
      <h1 className="text-center text-3xl font-bold my-4">Add A Toy</h1>
      <form
        onSubmit={handleSumbit}
        className=" shadow-2xl bg-base-200 p-8 rounded-xl"
      >
        <div className="grid grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy name</span>
            </label>
            <input
              type="text"
              placeholder="toyname"
              className="input input-bordered"
              name="toyname"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Select Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="category"
              required
            >
              <option >
                -----Select-----
              </option>
              <option>Marvel</option>
              <option>Harry Potter</option>
              <option>Batman</option>
              <option>City</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              className="input input-bordered"
              name="price"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratting</span>
            </label>
            <input
              type="text"
              placeholder="Give a ratting out of 5"
              className="input input-bordered"
              name="ratting"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="How many toys you have?"
              className="input input-bordered"
              name="stock"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              placeholder="Image url"
              className="input input-bordered"
              name="image"
              required
            />
          </div>
        </div>
        <div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Write something about your product"
              className="input input-bordered pt-1 h-24"
              name="description"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Addtoys;
