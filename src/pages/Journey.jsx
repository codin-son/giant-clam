import Navbar from "../components/Navbar";
import Hero from "../components/Journey/Hero";
import Footer from "../components/Footer";
import JourneySummary from "../components/Journey/JourneySummary";
const Journey = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <div className="container mx-auto">
        <JourneySummary/>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Journey;
