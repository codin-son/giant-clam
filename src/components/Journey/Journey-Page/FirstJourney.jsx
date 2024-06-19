import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer";
import { Link } from "react-router-dom";
const FirstJourney = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="container mx-auto mt-24">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/projects/journey"}>Our Journey</Link>
              </li>
              <li>The First Step: Training Models and Testing ROVs for Giant Clam
              Detection</li>
            </ul>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="text-4xl font-bold text-white text-center">
              The First Step: Training Models and Testing ROVs for Giant Clam
              Detection
            </div>
            <div className="text-center mt-5">Unknown</div>
            <div style={{ height: "500px", width: "800px" }} className="mt-5">
              <img
                src="/giant-clam/rov.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="mt-16 px-60">
              <div className="">
                Preparing for our maiden expedition to Tioman Island, we harness
                the potential of AI and ROVs to study giant clams. Our journey
                starts with training AI models using online images. Rigorous
                testing, even with printed images, ensures accuracy.
                Simultaneously, we fine-tune our ROVs for peak performance. Stay
                tuned as we venture into the ocean's depths, unlocking the
                secrets of giant clams.
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">
                  Setting Sail on the Giant Clam Odyssey
                </div>
                <div className="mt-2">
                  In the heart of our ambitious project lay the dream of
                  exploring the vibrant underwater world of Tioman Island, home
                  to one of the ocean's most magnificent creatures – the giant
                  clam. This journey marked the inception of our incredible
                  adventure, one that combined cutting-edge technology with the
                  marvels of the deep blue sea.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">The Vision</div>
                <div className="mt-2">
                  Our journey began with a vision - to harness the power of
                  modern technology to study and protect the giant clam
                  population around Tioman Island. The first crucial step was to
                  create an intelligent system that could detect and monitor
                  these marvelous creatures using Remote Operated Vehicles (ROV)
                  and Artificial Intelligence (AI).
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Training the AI</div>
                <div className="mt-2">
                  To make this vision a reality, we embarked on the path of
                  training our AI model. Using YOLO version 7, we collected an
                  extensive dataset of giant clam images from online searches,
                  preparing our AI to recognize these unique marine animals.
                  This phase was a labor of love, as we meticulously curated and
                  labeled thousands of images to further improve our AI model's
                  detection accuracy.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Testing our Model</div>
                <div className="mt-2">
                  With our AI model primed and ready, we needed to ensure its
                  functionality. To do so, we printed images of giant clams and
                  put our AI to the test. Would it be able to detect these
                  incredible creatures with the precision we desired? This step
                  helped us fine-tune our model, making it more adept at
                  spotting giant clams in the wild.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">ROV Assessment</div>
                <div className="mt-2">
                  While our AI underwent rigorous training and testing, we
                  didn't neglect our trusty ROV, a vital part of our expedition.
                  We meticulously checked every detail to ensure its
                  reliability. Is it truly waterproof? Are all the wiring and
                  components functioning flawlessly? We left no stone unturned
                  to guarantee the ROV's operational excellence.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Automation Advancements</div>
                <div className="mt-2">
                  A pivotal moment in our journey was achieving automation. We
                  programmed the system to seamlessly capture video streams from
                  the ROV and apply our AI detection algorithms in real-time.
                  This was a game-changer, as it allowed us to monitor the
                  underwater world continuously.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">The Pool Test</div>
                <div className="mt-2">
                  To put everything to the test, we ran the ROV in a controlled
                  environment – a pool. Here, we presented it with printed
                  images of giant clams, mimicking real-world scenarios. We
                  closely observed and recorded the accuracy of our AI's clam
                  detection capabilities.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Challenges and Triumphs</div>
                <div className="mt-2">
                  As with any pioneering endeavor, challenges arose. Despite our
                  hard work and dedication, we found that the accuracy of our AI
                  model did not meet our expectations during the pool tests.
                  This was a setback, but it only fueled our determination to
                  improve and refine our technology.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">The Ongoing Journey</div>
                <div className="mt-2">
                  Our journey to explore and protect the giant clams of Tioman
                  Island is far from over. We view each challenge as an
                  opportunity for growth and learning. With unwavering
                  commitment, we continue to refine our AI, enhance our ROV, and
                  seek new ways to achieve our goal of safeguarding these
                  majestic creatures.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FirstJourney;
