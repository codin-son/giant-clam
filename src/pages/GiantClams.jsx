import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Giant-clam/Hero";
import Fact from "../components/Giant-clam/Fact";
import Species from "../components/Giant-clam/Species";
import ClamColor from "../components/Giant-clam/ClamColor";
const GiantClams = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <div className="container mx-auto">
        <Fact/>
        <Species/>
        <ClamColor/>
      </div>
      <Footer/>
    </div>
  );
};

export default GiantClams;
