const GiantClamRole = () => {
  return (
    <>
      <div className="mt-10 sm:mt-10 md:mt-24 lg:mt-24 xl:mt-24 container mx-auto">
        <div className="text-center text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-black text-white mb-5">
          Giant Clams: Unsung Heroes of the Ocean Ecosystem
        </div>
        <div className="flex justify-center">
          <p className="text-center text-white px-5 sm:px-5 md:px-5 lg:px-40 xl:px-40">
            Uncover the vital role of giant clams in shaping and sustaining
            vibrant underwater ecosystems. These magnificent creatures provide
            shelter for marine life, filter seawater, and support coral reef
            growth, making them essential to the health and balance of our
            oceans. Explore the fascinating ways in which giant clams contribute
            to marine biodiversity and learn about their importance to coastal
            communities.
          </p>
        </div>
        <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-5 gap-5 xl:gap-16 mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
            <div className=" xl:col-span-3">
              <div className="flex flex-col gap-5">
                <div className="border-2 rounded-md bg-base-300 p-6">
                  <h1 className="text-white font-bold text-2xl mb-3">
                    Shelter & Sanctuary
                  </h1>
                  <p className="text-white text-justify text-lg">
                    Giant clams play a vital role in supporting marine
                    biodiversity. They provide shelter and refuge for various
                    marine organisms, including fish and invertebrates. These
                    clam species offer a safe haven for juvenile fish and other
                    small creatures, contributing to the overall health and
                    diversity of marine ecosystems
                  </p>
                </div>
                <div className="border-2 rounded-md bg-base-300 p-6">
                  <h1 className="text-white font-bold text-2xl mb-3">
                    Nature's Filters
                  </h1>
                  <p className="text-white text-justify text-lg">
                    Giant clams act as natural filters in the ocean. They
                    constantly filter and clean the surrounding seawater,
                    removing excess nutrients and particulate matter. This
                    filtration process helps maintain water clarity and quality,
                    which is essential for the survival of coral reefs and other
                    marine life
                  </p>
                </div>
                <div className="border-2 rounded-md bg-base-300 p-6">
                  <h1 className="text-white font-bold text-2xl mb-3">
                    Coral Reef Catalysts
                  </h1>
                  <p className="text-white text-justify text-lg">
                    Giant clams promote the growth of coral reefs. Their
                    nutrient-rich excretions, known as feces, contain essential
                    elements that corals need to thrive. The presence of giant
                    clams can enhance the overall health and resilience of coral
                    reef ecosystems, which are critical for various marine
                    species and coastal protection
                  </p>
                </div>
                <div className="border-2 rounded-md bg-base-300 p-6">
                  <h1 className="text-white font-bold text-2xl mb-3">
                    Culture, Commerce, and Conservation
                  </h1>
                  <p className="text-white text-justify text-lg">
                    Giant clams have cultural and economic importance in many
                    coastal communities. They are valued for their meat, shells,
                    and ornamental value. Sustainable harvesting practices can
                    provide income and livelihood opportunities for local
                    populations, contributing to the well-being of coastal
                    communities
                  </p>
                </div>
              </div>
            </div>
            <div className="xl:col-span-2 flex  justify-center items-center">
                <img src="src/assets/giant-clam/giant-clam-2.JPG" className="rounded-xl h-full"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GiantClamRole;
