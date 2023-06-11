import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ToyEdit = () => {
  const toy = useLoaderData();
  const id = toy._id;
  // Edit a toy
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedToy = {
      price: parseFloat(e.target.price.value),
      stock: parseInt(e.target.stock.value),
      description: e.target.description.value,
    };
    fetch(`https://bd-lego-server.vercel.app/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            customClass: {
              title: "text-white",
            },
            title: "Success!",
            text: " Toy Edited Successfully!",
            icon: "success",
            background: "#171212",
            confirmButtonColor: "#1eb854",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            customClass: {
              title: "text-white",
            },
            title: "Failed!",
            text: " Toy Edit Failed!",
            icon: "error",
            background: "#171212",
            confirmButtonColor: "#1eb854",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <>
      <div>
        <h1 className="text-center text-3xl my-4 font-bold">Edit Your Toy</h1>
        <p className="text-center text-xl">{toy.toyname}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className=" mt-4">
          <div className="flex justify-center">
            <div className="mr-8">
              <label className="ml-4 mt-1">Toy Price</label>
              <br />
              <input
                className="input input-primary"
                type="text"
                name="price"
                defaultValue={toy.price}
                placeholder="Toy Price"
              />
            </div>
            <div>
              <label className="ml-4 mt-1">Toy Stock</label>
              <br />
              <input
                className="input input-primary"
                type="text"
                name="stock"
                defaultValue={toy.stock}
                placeholder="Toy Stock"
              />
            </div>
          </div>
          <div>
            <label className="ml-4 mt-1">Toy Description</label>
            <textarea
              className="textarea textarea-primary  w-full"
              type="text"
              name="description"
              defaultValue={toy.description}
              placeholder="Toy Description"
            />
          </div>

          <button className="btn btn-primary w-full mt-3">Edit</button>
        </form>
      </div>
    </>
  );
};

export default ToyEdit;
