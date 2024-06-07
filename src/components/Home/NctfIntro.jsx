const NctfIntro = () => {
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center text-white ">
          Funding Conservation: Our Project Backed by{" "}
          <span
            className="text-white"
            style={{
              background:
                "linear-gradient(135deg, hsla(193, 100%, 50%, 1) 0%, hsla(149, 100%, 81%, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            NCTF
          </span>
        </h1>
        <p className="text-center text-white p-5">
          The National Natural Resources Conservation Trust Fund (NCTF) has been
          established to fund
          research, development, management, protection, adaptation, and
          mitigation efforts related to
          climate change, awareness, and conservation initiatives within the
          country.
        </p>
      </div>
    </>
  );
};

export default NctfIntro;
