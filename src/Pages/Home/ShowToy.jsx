import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Loader from "../Shared/Loader";
import Toy from "./Toy";

const ShowToy = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toys, setToys] = useState([]);
  const [clicked, setClicked] = useState(false);
  console.log(toys);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setCategory(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  useEffect(() => {
    fetch("http://localhost:5000/alllego")
        .then((response) => response.json())
        .then((data) => {
            setToys(data);
            
        })
        .catch(() => {
            
        });
}, [clicked]);

  const handleLegoLoad = (cat) => {
    fetch(`http://localhost:5000/legos?category=${cat}`)
      .then((response) => response.json())
      .then((data) => {
        
        setToys(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Tabs>
        <TabList>
         
          {loading ? (
            <Loader />
          ) : (
            // 
            <>
            <Tab onClick={()=>setClicked(!clicked)}>All</Tab>
            {category &&
            category.map((cat, index) => <Tab onClick={()=>handleLegoLoad(cat)} key={index}>{cat}</Tab>
            )}
            </>
          )}
        </TabList>
        <TabPanel >
            <div className="flex flex-wrap">
            { toys.map((toy, index) => (<Toy key={index} toy={toy}/>))}
            </div>
        </TabPanel>
        {category &&
          category.map((cat, index) => (
            <TabPanel key={index}>{cat}</TabPanel>
          ))}
      </Tabs>
    </div>
  );
};

export default ShowToy;
