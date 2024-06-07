const NctfObjective = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center mt-10 text-4xl font-black text-white ">
          Objective
        </div>
        <div className="mt-5 flex justify-center items-center">
          <div className="">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
              <div className="col-span-3 sm:col-span-1 md:col-span-3">
                <div className="grid gap-4 grid-rows-2 h-full ">
                  <a className="group relative flex flex-col rounded-lg  justify-center items-center p-3 sm:p-3 md:p-5 lg:p-5 xl:p-10 h-full bg-cyan-900">
                    <img
                      src="src/assets/community.png"
                      alt=""
                      style={{ width: "40%" }}
                    />
                    <p className="text-slate-50 text-lg font-bold mt-5 text-center">
                      Assist in building capacity to meet the nation's
                      Multilateral Environmental Agreements commitments.
                    </p>
                  </a>
                  <a className="group relative flex flex-col rounded-lg  justify-center items-center p-3 sm:p-3 md:p-5 lg:p-5 xl:p-10 h-full bg-cyan-900">
                    <img
                      src="src/assets/3d-business-woman-scientist-working.png"
                      alt=""
                      style={{ width: "40%" }}
                    />
                    <p className="text-slate-50 text-lg font-bold mt-5 text-center">
                      Support research and development in natural resource
                      management and conservation.
                    </p>
                  </a>
                </div>
              </div>
              <div className="col-span-3 sm:col-span-1 md:col-span-3">
                <div className="grid gap-4 h-full">
                  <a className="group relative flex flex-col rounded-lg  p-3 sm:p-5 md:p-5 lg:p-5 xl:p-10 items-center justify-center h-full bg-cyan-900">
                    <p className="text-slate-50 text-lg font-bold mb-5 text-center">
                      Support Sustainable Forest Management.
                    </p>
                    <img
                      src="src/assets/3d-casual-life-trip-to-mountains.png"
                      alt=""
                      style={{ width: "30%" }}
                      className=""
                    />
                  </a>
                  <a className="group relative flex flex-col rounded-lg  p-3 sm:p-5 md:p-5 lg:p-5 xl:p-10 items-center h-full justify-center bg-cyan-900">
                    <div className="flex flex-row items-center">
                      <p className="text-slate-50 text-lg font-bold text-left pe-5">
                        Implement sustainable, <br />
                        long-term natural resource management.
                      </p>
                      <img
                        src="src/assets/3d-business-young-man-and-woman-looking-at-plan.png"
                        alt=""
                        style={{ width: "25%" }}
                        className=""
                      />
                    </div>
                  </a>
                  <a className="group relative flex flex-col rounded-lg  p-3 sm:p-5 md:p-5 lg:p-5 xl:p-10 items-center h-full justify-center bg-cyan-900">
                    <p className="text-slate-50 text-lg font-bold mb-5 text-center">
                      Develop a mechanism to receive and distribute funds for
                      managing natural resources and conserving biodiversity.
                    </p>
                    <img
                      src="src/assets/3d-fluency-fund-accounting.png"
                      alt=""
                      style={{ width: "25%" }}
                      className=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NctfObjective;
