const Fact = () => {
  return (
    <>
      <div className="mt-24">
        <div className="text-4xl font-bold text-white text-center">
          A Little Fact About Giant Clam
        </div>
        <div className="text-xl mt-5 text-center">
          Also known as Man-eater clams!
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-2 mt-5">
          <div className="bg-primary rounded-lg p-10">
            <div className="avatar flex justify-center ">
              <div className="bg-white p-6 rounded-full">
                <div className="w-24">
                  <img src="/src/assets/seaweed.png" />
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-base-100 text-center mt-5">
              Symbiotic Relationship
            </div>
            <div className="text-base-100 text-center">
              Giant clams and algae have a mutually beneficial partnership,
              helping them thrive in nutrient-poor waters
            </div>
          </div>
          <div className="bg-primary rounded-lg p-10">
            <div className="avatar flex justify-center ">
              <div className="bg-white p-6 rounded-full">
                <div className="w-24">
                  <img src="/src/assets/scalability.png" />
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-base-100 text-center mt-5">
              Size{" "}
            </div>
            <div className="text-base-100 text-center">
              Giant clams are the largest bivalve mollusks, growing up to 4 feet
              in length and weighing hundreds of pounds
            </div>
          </div>
          <div className="bg-primary rounded-lg p-10">
            <div className="avatar flex justify-center ">
              <div className="bg-white p-6 rounded-full">
                <div className="w-24">
                  <img src="/src/assets/underwater.png" />
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-base-100 text-center mt-5">
              Habitat
            </div>
            <div className="text-base-100 text-center">
              They inhabit warm, shallow waters in the Indo-Pacific region,
              especially coral reefs
            </div>
          </div>
          <div className="bg-primary rounded-lg p-10">
            <div className="avatar flex justify-center ">
              <div className="bg-white p-6 rounded-full">
                <div className="w-24">
                  <img src="/src/assets/rgb.png" />
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-base-100 text-center mt-5">
              Colorful Appearance
            </div>
            <div className="text-base-100 text-center">
              Known for vibrant mantle colors due to symbiotic algae
            </div>
          </div>
          <div className="bg-primary rounded-lg p-10">
            <div className="avatar flex justify-center ">
              <div className="bg-white p-6 rounded-full">
                <div className="w-24">
                  <img src="/src/assets/fish.png" />
                </div>
              </div>
            </div>

            <div className="text-2xl font-bold text-base-100 text-center">
              Feeding
            </div>
            <div className="text-base-100 text-center">
              They filter feed and can capture small prey using specialized
              tentacles
            </div>
          </div>
          <div className="bg-primary rounded-lg p-10">
            <div className="avatar flex justify-center ">
              <div className="bg-white p-6 rounded-full">
                <div className="w-24">
                  <img src="/src/assets/sand-clock.png" />
                </div>
              </div>
            </div>
            <div className="text-2xl font-bold text-base-100 text-center mt-5">
              Longevity
            </div>
            <div className="text-base-100 text-center">
              Some giant clams can live over 100 years
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fact;
