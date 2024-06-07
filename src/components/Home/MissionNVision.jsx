import { FaEarthAmericas } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";

const MissionNVision = () => {
  return (
    <>
      <div className="container mx-0 sm:mx-0 md:mx-auto lg:mx-auto">
        <div className="flex flex-col justify-center items-center mt-10 sm:mt-10 md:mt-24 lg:mt-24">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center text-white">
            Guiding the Way: Our Mission and Vision for a Sustainable Future
          </h1>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-10 mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-10 mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
            <div className="bg-base-300 p-5 sm:p-5 md:p-10 lg:p-10 xl:p-10 rounded-lg border">
              <div className="flex flex-row items-center justify-center mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-8  gap-2 sm:gap-5 md:gap- lg:gap-5 xl:gap-5">
                <FaEarthAmericas
                  style={{ width: 40, height: 40 }}
                  color="white"
                />
                <h1 className="text-xl font-medium text-white">
                  Empowering Change: Our Mission for a Better World
                </h1>
              </div>
              <div>
                <p className="text-justify text-white">
                  Our mission is to protect and sustainably manage giant clams
                  through pioneering research, innovative technology, and
                  collaborative partnerships. We aim to safeguard marine
                  ecosystems, nurture biodiversity, and inspire global marine
                  conservation efforts.
                </p>
              </div>
            </div>
            <div className="bg-base-300 p-5 sm:p-5 md:p-10 lg:p-10 xl:p-10 rounded-lg border">
            <div className="flex flex-row items-center justify-center mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-8  gap-2 sm:gap-5 md:gap-5 lg:gap-5 xl:gap-5">
                <MdFamilyRestroom
                  style={{ width: 40, height: 40 }}
                  color="white"
                />
                <h1 className="text-xl font-medium text-white">
                  Imagining a Hopeful Future: Our Vision for Tomorrow
                </h1>
              </div>
              <div>
                <p className="text-justify text-white">
                  We envision a world where giant clams are celebrated, marine
                  ecosystems flourish, and a united global community is
                  dedicated to marine conservation. Through innovation,
                  collaboration, and unwavering commitment, we aspire to create
                  thriving oceans for future generations to marvel at and
                  steward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionNVision;
