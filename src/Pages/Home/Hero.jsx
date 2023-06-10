import heroImg from "../../assets/heroimg.jpg";

const Hero = () => {
  return (
    <section className="">
      <div className="px-6 py-12 text-center md:px-12 lg:text-left">
        <div className=" mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div className=" rounded-lg px-6 py-12 bg-[hsla(0,0%,5%,0.55)] shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[60px]">
                <h1 className="mt-2 mb-16 text-4xl font-bold md:text-5xl xl:text-6xl">
                  LEGO <br />
                  <span className="text-primary">Build What You Love</span>
                </h1>
                <a className="btn btn-primary">Get started</a>
                <a className="btn btn-outline ml-4">Explore</a>
              </div>
            </div>
            <div className="md:mb-12 lg:mb-0  ">
              <img
                src={heroImg}
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
