import ContactUs from "./ContactUs";
import Gallary from "./Gallary";
import Help from "./Help";
import Hero from "./Hero";
import ShowToy from "./ShowToy";
import useTitle from "../../Hooks/useTitle";

const Home = () => {
    useTitle("Home");
    return (
        <>
            <Hero/>
            <ShowToy/>
            <Gallary/>
            <Help/>
            <ContactUs/>
        </>
    );
};

export default Home;