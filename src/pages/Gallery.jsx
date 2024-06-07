import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Gallery/Hero";
import Frame from "../components/Gallery/Frame";
const Gallery = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <div className="container mx-auto">
        <Frame/>
      </div>
      <Footer/>
    </div>
  );
};

export default Gallery;
