const NctfFocusPoint = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-center mt-10 sm:mt-10 md:mt-24 lg:mt-24 xl:mt-24 text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-black text-white ">
          NCTF Focus Area
        </div>
        <div className="mt-5">
          <div className="grid gap-2 mx-5 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
            <div className="collapse collapse-plus bg-cyan-900 p-1 sm:p-1 md:p-1 lg:p-2 xl:p-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium text-white">
                Natural Resource Management
              </div>
              <div className="collapse-content">
                <p className="text-white ">
                  Projects aim to manage, monitor, and protect biodiversity-rich
                  areas. Sensitive natural environments are a focus. In-situ
                  biodiversity conservation includes ecosystems and species.
                  Ex-situ biodiversity preservation protects local species and
                  genetics. Climate change mitigation projects mainstream
                  biodiversity conservation. Sustainable natural resource
                  management is promoted.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-cyan-900 p-1 sm:p-1 md:p-1 lg:p-2 xl:p-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-medium text-white text-xl">
                Research and Development
              </div>
              <div className="collapse-content">
                <p className="text-white text-lg">
                  Funding research and development (R&D) activities in
                  scientific, technological, and socio-economic fields related
                  to biodiversity conservation and sustainable natural resource
                  management, in line with conservation policies and the
                  country's commitments in various environmental forums and
                  agreements.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-cyan-900 p-1 sm:p-1 md:p-1 lg:p-2 xl:p-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-medium text-white text-xl ">
                Capacity Development
              </div>
              <div className="collapse-content">
                <p className="text-white text-lg">
                  Projects develop human capital and provide training in
                  biodiversity conservation and sustainable natural resource
                  management. This includes strengthening understanding of
                  policies, laws, regulations, guidelines, and national
                  obligations in various multi-lateral environmental forums and
                  agreements. Activities raise public awareness through
                  education, training, and capacity development, and support
                  campaigns for protection and conservation. Projects foster
                  understanding in the implementation, enforcement, and
                  improvement of policies, acts, regulations, and guidelines in
                  the field of conservation. NCTF funds the organization of
                  seminars, courses, workshops, conferences, and symposia.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-cyan-900 p-1 sm:p-1 md:p-1 lg:p-2 xl:p-5">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-medium text-white text-xl">
                Sustainable Financing Mechanisms
              </div>
              <div className="collapse-content">
                <p className="text-white text-lg">
                  Projects and activities to implement sustainable financing
                  mechanisms and financial benefit-sharing among federal and
                  state governments and other sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NctfFocusPoint;
