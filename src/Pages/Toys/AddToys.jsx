import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const Addtoys = () => {
  useTitle("Add Toys");
  const { user } = useContext(AuthContext);
  let displayName = user.displayName;
  let email = user.email;
  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyname = form.toyname.value;
    const regularPrice = form.regularPrice.value;
    const sellingPrice = form.sellingPrice.value;
    const ratting = form.ratting.value;
    const category = form.category.value;
    const stock = form.stock.value;
    const image = form.image.value;
    const description = form.description.value;
    toast.success("Toy Added Successfully");
    console.log(toyname, regularPrice, sellingPrice, ratting, stock, image, description);
    form.reset();
    const toy = {
      displayName,
      email,
      toyname,
      regularPrice,
      sellingPrice,
      ratting,
      category,
      stock,
      image,
      description

    };
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then(() => {
        
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
              <option disabled selected>
                --- select ---
              </option>
              <option value={"Car"}>Car</option>
              <option value={"Bike"}>Bike</option>
              <option value={"ThreeWhiler"}>Three Whiler</option>
              <option value={"Gun"}>Gun</option>
              <option value={"Audio"}>Audio</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Regular Price</span>
            </label>
            <input
              type="text"
              placeholder="Its regular price"
              className="input input-bordered"
              name="regularPrice"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Selling Price</span>
            </label>
            <input
              type="text"
              placeholder="Its selling price"
              className="input input-bordered"
              name="sellingPrice"
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
        </div>
        <div>
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