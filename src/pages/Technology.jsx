import Navbar from "../components/Navbar";
import Hero from "../components/Technology/Hero";
import Rov from "../components/Technology/Rov";
import Ai from "../components/Technology/Ai";
import "../css/Technology.css";
import Footer from "../components/Footer";
const Technology = () => {
  return (
    <div className="">
      <Navbar />
      <div className="cyan-fade">
        <Hero />
      </div>
      <div className="container mx-auto">
        <Rov />
        <Ai />
      </div>
      <Footer />
    </div>
  );
};

export default Technology;
