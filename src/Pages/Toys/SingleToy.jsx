import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useTitle from "../../Hooks/useTitle";

const SingleToy = () => {
  useTitle("Product Details");
  const data = useLoaderData();

  return (
    <div className="mb-40 mt-10 pb-10">
      <div className="mx-auto grid grid-cols-2  gap-4">
        <div>
          <img className="w-11/12" src={data?.img} alt="" />
        </div>
        <div className="py-12">
          <span className="text-sm font-semi-bold my-2">
            Home / {data?.category} / {data?.toyname}
          </span>
          <h1 className="font-bold text-3xl">{data?.toyname}</h1>
          <h1 className="font-semibold text-2xl my-4">
            Category: {data?.category}
          </h1>
          <div className="flex my-2">
            <h2 className="text-5xl font-bold text-primary">${data?.price}</h2>
          </div>
          <h1 className="font-semibold text-2xl my-4">
            Available Quantity: {data?.stock}
          </h1>
          <p>Ratting: {data?.ratting}</p>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Select Quantity</span>
              </label>
              <input
                type="number"
                defaultValue="1"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <Tabs>
            <TabList>
              <Tab>Description</Tab>
              <Tab>Seller Info</Tab>
            </TabList>
            <TabPanel>
              <div>{data?.description}</div>
            </TabPanel>
            <TabPanel>
              <div>
                <h1 className="font-bold text-2xl">
                  Seller Name: {data?.sellerName}
                </h1>
                <h1 className="font-bold text-2xl">
                  Seller Email: {data?.sellerEmail}
                </h1>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
