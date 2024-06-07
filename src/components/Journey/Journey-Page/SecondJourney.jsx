import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer";
import { Link } from "react-router-dom";
import firsttrip from "/src/assets/first-trip.jpg";  
const SecondJourney = () => {
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
              <li>Dive into the Depths: Our First Journey with Giant Clams</li>
            </ul>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="text-4xl font-bold text-white text-center">
              Dive into the Depths: Our First Journey with Giant Clams
            </div>
            <div className="text-center mt-5">29 Jun 2023</div>
            <div style={{ height: "500px", width: "800px" }} className="mt-5">
              <img
                src={firsttrip}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="mt-16 px-60">
              <div className="">
                Our journey to explore the captivating world of giant clams in
                Tioman Island reached an exciting milestone with our first
                expedition. This adventure was a collaborative effort, led by
                our passionate professor and joined by four dedicated students.
                Our goal was to test our giant clam detection technology,
                collect valuable data, and further our understanding of these
                remarkable marine creatures.
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">The Main Objectives</div>
                <div className="mt-2">
                  <ul className="list-disc list-inside">
                    Our primary objectives were clear:
                    <li>
                      Test Giant Clam Detection Accuracy: We aimed to evaluate
                      the accuracy of our AI-based giant clam detection system
                      in a real-life environment.
                    </li>
                    <li>
                      ROV Trial in Real-time Conditions: We intended to operate
                      our ROV under real-time sea conditions to ensure its
                      effectiveness and reliability.
                    </li>
                    <li>
                      Data Collection: We set out to collect as much data as
                      possible to advance our research and contribute to the
                      protection of giant clams.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">
                  Exploration in Kampung Tekek
                </div>
                <div className="mt-2">
                  Our base for this expedition was Kampung Tekek, a charming
                  village on the island. Here, we rented a boat and enlisted the
                  services of a skilled boat driver who knew the waters well.
                  Our goal was to find the ideal location for our giant clam
                  detection experiment.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">ROV Dive and Detection</div>
                <div className="mt-2">
                  After careful planning and preparation, we set our ROV in
                  motion, diving into the crystal-clear waters of Tioman Island.
                  While the ROV captured underwater video streams, our AI
                  detection system ran in real-time, attempting to identify
                  giant clams in the footage.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Challenges at Sea</div>
                <div className="mt-2">
                  During our boat trip, we encountered a significant challenge -
                  strong currents. These turbulent waters affected the clarity
                  of our video stream, making giant clam detection a challenging
                  task. We realized that our detection system needed further
                  improvement to handle such conditions.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">
                  Learning from Experience
                </div>
                <div className="mt-2">
                  Our observations didn't end there. We also noted that our
                  detection accuracy needed enhancement due to limitations in
                  our training data. To address this, we used our GoPro camera
                  to capture images of giant clams in various situations, such
                  as different lighting conditions, clam types, colors, and
                  image qualities. These diverse images would serve as valuable
                  training data to improve our detection system in future
                  expeditions.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Shore Operations and Knowledge Sharing</div>
                <div className="mt-2">
                Our work extended beyond the boat. We operated the ROV along the shore to gather more data and refine our detection system. Additionally, we had the opportunity to meet with Reef Check Malaysia, an organization dedicated to the preservation of marine life. We engaged in a knowledge-sharing session to learn more about giant clams in Pulau Tioman and received valuable tips to aid our research.
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

export default SecondJourney;
