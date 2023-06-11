import { RiDeleteBinLine, RiEdit2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Toy = ({ toy, handleRemove }) => {
  const { _id, img, stock, toyname, price } = toy;
  return (
    <div className="flex border-base-300 border-2 rounded-xl p-2 mb-2">
      <img className="w-[91px] rounded-lg" src={img} alt="" />
      <div className="flex ml-2 w-full justify-between items-center">
        <div className="w-48">
          <p>{toyname}</p>
          <p>
            <small>Quantity: {stock}</small>
          </p>
        </div>
        <div>
          <p>Price: {price}</p>
        </div>
        <div>
          <Link
            to={`/toyedit/${_id}`}
            className="tooltip"
            data-tip="Edit"
          >
            <RiEdit2Line className="bg-secondary hover:bg-secondary-focus m-4 w-12 h-12 p-3 rounded-full text-black " />
          </Link>
          <button
            className="tooltip"
            data-tip="Delete"
            onClick={() => handleRemove(_id)}
          >
            <RiDeleteBinLine className="bg-secondary hover:bg-secondary-focus m-4 w-12 h-12 p-3 rounded-full text-black " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toy;
