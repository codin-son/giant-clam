const Hero = () => {
  return (
    <>
      <div>
        <div className="text-4xl text-white font-bold text-center mt-24">
          Uncovering the&nbsp;
          <span
            className="text-white"
            style={{
              background:
                "radial-gradient(circle, #bef264, #b1f273, #a4f281, #99f28f, #90f19c, #83f1aa, #77f0b8, #6eefc4, #61eed5, #5bede3, #5debef, #67e8f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mysteries of Clams
          </span>
          : &nbsp;
          <br /> A Deep Dive into their World
        </div>
        <div className="text-xl text-center mt-5">
          Get to know about giant clam in Malaysia
        </div>
        <div className="container mx-auto mt-10">
          <img
            src="/src/assets/giant-clam/P9110765.JPG"
            alt=""
            className="rounded-xl"
            style={{ height: "700px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
