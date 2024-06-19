const GiantClamVulnerable = () => {
  return (
    <>
      <div className="mt-10 sm:mt-10 md:mt-24 lg:mt-24 container mx-auto">
        <div>
          <div className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-black text-white mb-5">
            Giant Clam Populations at Risk, Declared Vulnerable
          </div>
          <div className="flex justify-center">
            <p className="text-center text-white px-5">
              The decline of giant clam populations is a growing concern due to
              overharvesting, habitat destruction, and climate change. These
              factors have led to the vulnerability of giant clams, with several
              species now listed as threatened or endangered. Explore the
              challenges facing giant clam populations and learn about the
              conservation efforts aimed at protecting these magnificent
              creatures.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5 mt-5 mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
            <div className="card bg-primary shadow-xl">
              <figure className="px-5 sm:px-5 md:px-5 lg:px-5 xl:px-10 pt-5 sm:pt-5 md:pt-5 lg:pt-5 xl:pt-10">
                <img
                  src="https://image5.sixthtone.com/image/0/14/665.jpg"
                  alt="Overharvesting"
                  className="rounded-xl h-72 object-cover"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title text-black text-xl text-center">Overfishing</h2>
                <p className="text-black">
                  Giant clams are overharvested for their meat and shells.
                  Overfishing has led to the decline of giant clam populations,
                  threatening their survival. The overexploitation of giant
                  clams is a major threat to their conservation.
                </p>
              </div>
            </div>
            <div className="card bg-primary shadow-xl">
              <figure className="px-5 sm:px-5 md:px-10 lg:px-5 xl:px-10 pt-5 sm:pt-5 md:pt-10 lg:pt-5 xl:pt-10">
                <img
                  src="src/coral-destruction.jpg"
                  alt="Coral Destruction"
                  className="rounded-xl h-72 object-cover"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title text-black text-xl text-center">Habitat Loss</h2>
                <p className="text-black">
                  Giant clams are threatened by habitat loss and destruction.
                  They are sensitive to changes in environmental conditions,
                  including water quality and temperature. Habitat loss is a
                  major threat to their conservation.
                </p>
              </div>
            </div>
            <div className="card bg-primary shadow-xl">
              <figure className="px-5 sm:px-5 md:px-10 lg:px-5 xl:px-10 pt-5 sm:pt-5 md:pt-10 lg:pt-5 xl:pt-10">
                <img
                  src="https://cdn.shopify.com/s/files/1/2961/5162/files/Civa_Fiji_Pearls_Giant_Clam_Farming_28.jpg?v=1522975061"
                  alt="Baby Giant Clam"
                  className="rounded-xl h-72 object-cover"
                />
              </figure>
              <div className="card-body items-center">
                <h2 className="card-title text-black text-xl text-center">
                  Slow growth and reproduction
                </h2>
                <p className="text-black">
                  Giant clams have a slow growth rate and take several years to
                  reach sexual maturity. This makes it difficult for their
                  populations to recover quickly from overharvesting or other
                  disturbances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiantClamVulnerable;
