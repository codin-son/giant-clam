import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Research-library/Hero";
import SearchBar from "../components/Research-library/SearchBar";
import ListResearch from "../components/Research-library/ListResearch";
const ResearchLibrary = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <div className="container mx-auto">
      <SearchBar/>
      <ListResearch/>
      </div>
      <Footer/>
    </div>
  );
};

export default ResearchLibrary;
