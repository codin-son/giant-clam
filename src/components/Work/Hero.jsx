const Hero = () => {
  return (
    <>
      <div className="min-h-full pt-10 lg:pt-24 xl:pt-40 lg:px-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 items-center gap-5 sm:gap-5 md:gap-5 lg:gap-10 xl:gap-10">
          <div className="order-2 lg:order-1 xl:order-1">
            <h1 className="text-2xl lg:text-2xl xl:text-4xl font-bold text-white text-center lg:text-center xl:text-left">
              Protecting Giants: Our Mission to Save <br className="hidden sm:block md:block lg:block xl:block" />
              <span
                className="text-white"
                style={{
                  // background: "linear-gradient(to right bottom, #001d3d, #002960, #003283, #2b39a5, #553cc5, #7a36c9, #9b2bcb, #ba16ca, #cb00b2, #d6009c, #da1188, #db2777)",
                  //   background:
                  //     " radial-gradient(circle, #001d3d, #002657, #002e72, #0a348c, #2b39a5, #5138ad, #7134b2, #8e2eb5, #aa23a6, #c01a96, #d01c87, #db2777)",
                  background:
                    "linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Endangered Giant Clams
              </span>
            </h1>
            <div className="xl:text-2xl mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2 text-center sm:text-center md:text-center lg:text-center xl:text-center px-5 sm:px-5 md:px-10 lg:px-10 xl:px-2">
              Months of preparation led our team to Tioman Island's shores on an
              extraordinary mission - conserving the island's endangered giant
              clam populations. Discover our crucial work safeguarding these
              ocean giants.
            </div>
            <div className=" flex items-center justify-center">
                <button className="btn btn-primary mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2">Learn More</button>
            </div>
          </div>
          <div className="order-1 lg:order-2 xl:order-1 px-5 sm:px-5 md:px-5 lg:px-0 ">
            <img src="/giant-clam/a2tech.jpg" alt="hero" className="rounded-xl "/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
