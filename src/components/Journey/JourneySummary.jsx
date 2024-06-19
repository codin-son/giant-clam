import { Link } from "react-router-dom";
const JourneySummary = () => {
  return (
    <>
      <div className="grid grid-rows-1 gap-10">
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          <div
            className="rounded-lg"
            style={{ width: "748px", height: "561px" }}
          >
            <img
              src="/rov.png"
              alt=""
              style={{ width: "100%", height: "100%" }}
              className="rounded-xl"
            />
          </div>
          <div className="pe-20">
            <h2 className="text-4xl font-bold text-white">
              The First Step: Training Models and Testing ROVs for Giant Clam
              Detection
            </h2>
            <div className="text-base mt-2">Unknown</div>
            <p className="py-6">
              Preparing for our maiden expedition to Tioman Island, we harness
              the potential of AI and ROVs to study giant clams. Our journey
              starts with training AI models using online images. Rigorous
              testing, even with printed images, ensures accuracy.
              Simultaneously, we fine-tune our ROVs for peak performance. Stay
              tuned as we venture into the ocean's depths, unlocking the secrets
              of giant clams.
            </p>
            <Link to={"/projects/journey/first-journey"}>
              <button className="btn btn-primary">Read More</button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          <div>
            <h2 className="text-4xl font-bold text-white">
              Dive into the Depths: Our First Journey with Giant Clams
            </h2>
            <div className="text-base mt-2">23 Jun 2023</div>
            <p className="py-6 ">
              Our journey to explore the captivating world of giant clams in
              Tioman Island reached an exciting milestone with our first
              expedition. This adventure was a collaborative effort, led by our
              passionate professor and joined by four dedicated students. Our
              goal was to test our giant clam detection technology, collect
              valuable data, and further our understanding of these remarkable
              marine creatures.
            </p>
            <Link to={"/projects/journey/second-journey"}>
              <button className="btn btn-primary">Read More</button>
            </Link>
          </div>
          <div>
            <img
              src="/first-trip.jpg"
              alt=""
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 items-center justify-center">
          <div>
            <img src="/a2tech.jpg" alt="" className="rounded-lg" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-white">
              Triumph Amidst Challenges: Our Second Expedition to Tioman Island
            </h2>
            <div className="text-base mt-2">2 September 2023</div>
            <p className="py-6 ">
              Our quest to understand and protect the incredible giant clams of
              Tioman Island was an ongoing adventure. Building on the
              experiences of our previous expeditions, we were ready to take the
              next steps in our journey. In the third phase of our project, we
              delved deeper into data collection, enhanced our detection model,
              and forged valuable partnerships.
            </p>
            <Link to={"/projects/journey/third-journey"}>
              <button className="btn btn-primary">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneySummary;
