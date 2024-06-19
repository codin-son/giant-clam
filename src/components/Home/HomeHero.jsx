const HomeHero = () => {
  return (
    <>
      <div
        className="hero min-h-screen sm:min-h-screen md:min-h-screen lg:min-h-screen"
        style={{
          backgroundImage: "url(/giant-clam/giant-clam/giant-clam.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black"></div>
        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="mb-5 text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Save{" "}
              <span
                className="text-white"
                style={{
                  // background:
                  //   "linear-gradient(98deg, #20E6F8 44.57%, #06BACB 90.03%)",
                  background:
                    "linear-gradient(135deg, hsla(193, 100%, 50%, 1) 0%, hsla(149, 100%, 81%, 1) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Giant Clams
              </span>
              ,<br />Save Our Seas
            </h1>
            <p className="text-white text-center text-wrap mb-5 text-xl">
              Stay informed about clam populations. Protect their habitats.
              Avoid overharvesting. Support conservation efforts.
              <br /> Ensure a sustainable future for clams.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
