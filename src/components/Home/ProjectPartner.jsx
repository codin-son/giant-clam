const ProjectPartner = () => {
  return (
    <>
      <div className="container mt-10 sm:mt-10 md:mt-24 lg:mt-24 xl:mt-24 mx-auto">
        <div>
          <div className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-black text-white mb-5">
            Project Partnerships: Building a Brighter Future Together
          </div>
          <div className="flex justify-center">
            <p className="text-center text-white px-5 ">
              We are proud to work with these partners in our mission to
              conserve giant clams and safeguard our oceans.
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
            <div className="card bg-base-300  border-2">
              <figure className="px-5 sm:px-5 md:px-5 lg:px-10 xl:px-10 pt-5 sm:pt-5 md:pt-5 lg:pt-10 xl:pt-10">
                <img
                  src="src/malaysia.png"
                  alt="Kerajaan Malaysia"
                  className="rounded-xl h-20 sm:h-20 md:h-40 lg:h-40 xl:h-40 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Malaysia Government</h2>
              </div>
            </div>
            <div className="card bg-base-300  border-2">
              <figure className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 pt-5 sm:pt-5 md:pt-10 lg:pt-10 xl:pt-10">
                <img
                  src="src/cairo.png"
                  alt="cairo"
                  className="rounded-xl h-20 sm:h-20 md:h-40 lg:h-40 xl:h-40 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">CAIRO UTM</h2>
              </div>
            </div>
            <div className="card bg-base-300  border-2">
              <figure className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 pt-5 sm:pt-5 md:pt-10 lg:pt-10 xl:pt-10">
                <img
                  src="src/nctf.png"
                  alt="NCTF"
                  className="rounded-xl h-20 sm:h-20 md:h-40 lg:h-40 xl:h-40 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  NATIONAL CONSERVATION TRUST FUND FOR NATURAL RESOURCES
                </h2>
              </div>
            </div>
            <div className="card bg-base-300  border-2">
              <figure className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 pt-5 sm:pt-5 md:pt-10 lg:pt-10 xl:pt-10">
                <img
                  src="src/mybis.png"
                  alt="MYBIS"
                  className="rounded-xl h-20 sm:h-20 md:h-40 lg:h-40 xl:h-40 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">
                  Malaysia Biodiversity Information System
                </h2>
              </div>
            </div>
            <div className="card bg-base-300  border-2">
              <figure className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 pt-5 sm:pt-5 md:pt-10 lg:pt-10 xl:pt-10">
                <img
                  src="src/reefcheck.png"
                  alt="REEF CHECK MALAYSIA"
                  className="rounded-xl h-20 sm:h-20 md:h-40 lg:h-40 xl:h-40 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">REEF CHECK MALAYSIA</h2>
              </div>
            </div>
            <div className="card bg-base-300  border-2">
              <figure className="px-5 sm:px-5 md:px-10 lg:px-10 xl:px-10 pt-5 sm:pt-5 md:pt-10 lg:pt-10 xl:pt-10">
                <img
                  src="src/utm.png"
                  alt="UTM"
                  className="rounded-xl h-20 sm:h-20 md:h-40 lg:h-40 xl:h-40 object-contain"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">UNIVERSITI TEKNOLOGI MALAYSIA</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPartner;
