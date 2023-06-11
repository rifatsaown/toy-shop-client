import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loader from "../Shared/Loader";
import Toy from "./Toy";

const ShowToy = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toyLoad, setToyLoad] = useState(true);
  const [toys, setToys] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("https://bd-lego-server.vercel.app/category")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCategory(data);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("https://bd-lego-server.vercel.app/alllego")
      .then((response) => response.json())
      .then((data) => {
        setToyLoad(false);
        setToys(data);
      })
      .catch(() => {
        setToyLoad(false);
      });
  }, [clicked]);

  const handleLegoLoad = (cat) => {
    setToyLoad(true);
    fetch(`https://bd-lego-server.vercel.app/legos?category=${cat}`)
      .then((response) => response.json())
      .then((data) => {
        setToyLoad(false);
        setToys(data);
      })
      .catch((err) => {
        setToyLoad(false);
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-primary font-bold text-center my-5">
        All Toys With Category
      </h1>
      <Tabs>
        <TabList>
          {loading ? (
            <Loader />
          ) : (
            //
            <>
              <Tab
                onClick={() => {
                  setClicked(!clicked);
                  setToyLoad(true);
                }}
              >
                All
              </Tab>
              {category &&
                category.map((cat, index) => (
                  <Tab onClick={() => handleLegoLoad(cat)} key={index}>
                    {cat}
                  </Tab>
                ))}
            </>
          )}
        </TabList>
        {category && (
          <TabPanel>
            {toyLoad ? (
              <Loader></Loader>
            ) : (
              <div className="flex justify-center flex-wrap">
                {toys.map((toy, index) => (
                  <Toy key={index} toy={toy} />
                ))}
              </div>
            )}
          </TabPanel>
        )}
        {category &&
          category.map((cat, index) => (
            <TabPanel key={index}>
              {toyLoad ? (
                <Loader></Loader>
              ) : (
                <div className="flex justify-center flex-wrap">
                  {toys.map((toy, index) => (
                    <Toy key={index} toy={toy} />
                  ))}
                </div>
              )}
            </TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default ShowToy;
