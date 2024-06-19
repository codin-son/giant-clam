import Navbar from "/src/components/Navbar.jsx";
import Footer from "/src/components/Footer";
import { Link } from "react-router-dom";
const ThirdJourney = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="container mx-auto mt-36">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <Link to={"/projects/journey"}>Our Journey</Link>
              </li>
              <li>
                Triumph Amidst Challenges: Our Second Expedition to Tioman
                Island
              </li>
            </ul>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="text-4xl font-bold text-white text-center">
              Triumph Amidst Challenges: Our Second Expedition to Tioman Island
            </div>
            <div className="text-center mt-5">2 September 2023</div>
            <div style={{ height: "500px", width: "800px" }} className="mt-5">
              <img
                src="/a2tech.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="mt-16 px-60">
              <div className="">
                Our quest to understand and protect the incredible giant clams
                of Tioman Island was an ongoing adventure. Building on the
                experiences of our previous expeditions, we were ready to take
                the next steps in our journey. In the third phase of our
                project, we delved deeper into data collection, enhanced our
                detection model, and forged valuable partnerships.
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">
                  Strengthening Our Arsenal
                </div>
                <div className="mt-2">
                  Before embarking on our second trip to Tioman Island, we
                  dedicated time to refine our AI detection model. We used the
                  images and insights gathered during our initial journey to
                  train the model further. Additionally, we meticulously
                  serviced our ROV to ensure its seamless performance in the
                  field.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">
                  A Bigger Team and Greater Objectives
                </div>
                <div className="mt-2">
                  <ul className="list-decimal list-inside">
                    For our second trip, we assembled a team of six, including
                    members from A2Tech Company. Together, we aimed to
                    accomplish several key objectives:
                    <li>
                      Collect More Data: Our thirst for knowledge about giant
                      clams drove us to gather even more data, enriching our
                      understanding of these marine wonders.
                    </li>
                    <li>
                      Enhance Detection Accuracy: We sought to refine our giant
                      clam detection system, striving for higher accuracy and
                      precision.
                    </li>
                    <li>
                      Sharing Session with Reef Check Malaysia: Collaboration
                      remained essential, and we scheduled another insightful
                      session with Reef Check Malaysia to exchange knowledge and
                      ideas.
                    </li>
                  </ul>
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
                  A Miraculous Turn of Events
                </div>
                <div className="mt-2">
                  However, the second boat trip proved to be a blessing.
                  Miraculously, the sea's currents were calm and clear, making
                  our mission considerably easier. With improved conditions, we
                  seized the opportunity to gather more data. Although our giant
                  clam detection accuracy was still a work in progress, it
                  showed promising improvement compared to our previous model.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">
                  Navigating Ferry Authority
                </div>
                <div className="mt-2">
                  Our journey also faced a bureaucratic hurdle when ferry
                  authorities initially denied us the right to bring the ROV on
                  board. Through careful negotiation and discretion, we managed
                  to secure permission to transport our essential equipment,
                  ensuring our mission could continue.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Race Against Time</div>
                <div className="mt-2">
                  Time was a precious commodity during this expedition. Our
                  ferry trip schedule afforded us just one hour for the first
                  boat trip on the evening of our arrival, limiting our data
                  collection. The evening ocean presented unique challenges due
                  to limited visibility.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Shore Discoveries</div>
                <div className="mt-2">
                  Despite these challenges, we made exciting discoveries.
                  Alongside Tioman Island Marina, we encountered some of the
                  largest giant clams we had ever seen. Our exploration
                  continued to the jetty area, where we discovered a wealth of
                  giant clams.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">Extensive Exploration</div>
                <div className="mt-2">
                  Time was a precious commodity during this expedition. Our
                  ferry trip schedule afforded us just one hour for the first
                  boat trip on the evening of our arrival, limiting our data
                  collection. The evening ocean presented unique challenges due
                  to limited visibility.
                </div>
              </div>
              <div className="mt-10">
                <div className="font-bold text-xl">
                  Knowledge Sharing and Collaboration
                </div>
                <div className="mt-2">
                  As our journey came to a close, we reconvened with Reef Check
                  Malaysia for another enlightening knowledge-sharing session.
                  This collaboration reinforced our commitment to the
                  preservation and study of giant clams in Tioman Island.
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

export default ThirdJourney;
