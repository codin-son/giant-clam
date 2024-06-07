const PrimaryObj = () => {
  return (
    <>
      <div className="mt-10 sm:mt-10 lg:mt-24 xl:mt-24">
        <div className="font-bold text-2xl  xl:text-4xl text-white text-center px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 ">
          Preserving Giant Clams through Technology and Awareness
        </div>
        <div className="xl:text-xl mt-2 sm:mt-2 md:mt-2 lg:mt-2 xl:mt-2 text-center px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5 ">
          Our mission is to conserve and protect giant clams in Tioman Island,
          Malaysia, using cutting-edge technology <br className="sm:hidden" /> such as Remotely
          Operated Vehicles (ROV) and Artificial Intelligence (AI)
        </div>
        <div className="font-bold text-2xl xl:text-4xl text-white text-center mt-10 xl:mt-16">
          Our Primary Objectives
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-5 gap-2 sm:gap-2 md:gap-2 lg:gap-2 xl:gap-5 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-5">
          <div className="bg-primary rounded-xl p-5 lg:p-10 xl:p-10">
            <div className="text-2xl xl:text-3xl font-bold text-base-100">01</div>
            <div className=" xl:text-xl mt-2 text-base-100">
              We aim to study the distribution of giant clam species in Tioman
              Island using ROV. This includes compiling existing data,
              conducting pilot surveys, and analyzing ROV-captured data
            </div>
          </div>
          <div className="bg-primary rounded-xl p-5 lg:p-10 xl:p-10">
            <div className="text-2xl xl:text-3xl font-bold text-base-100">02</div>
            <div className=" xl:text-xl mt-2 text-base-100">
              We're committed to raising awareness about giant clam conservation
              through a website, organizing Focus Group Discussions with
              experts, and developing educational materials and an AI/ROV SOP
              proposal.
            </div>
          </div>
          <div className="bg-primary rounded-xl p-5 lg:p-10 xl:p-10">
            <div className="text-2xl xl:text-3xl font-bold text-base-100">03</div>
            <div className=" xl:text-xl mt-2 text-base-100">
              Our goal is to classify giant clam types and sizes using AI on
              ROV. We will curate data, conduct continuous surveys, and analyze
              the collected information.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryObj;
