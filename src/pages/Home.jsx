import Navbar from "../components/Navbar";
import "../css/Home.css";
import MissionNVision from "../components/Home/MissionNVision";
import NctfIntro from "../components/Home/NctfIntro";
import NctfObjective from "../components/Home/NctfObjective";
import NctfFocusPoint from "../components/Home/NctfFocusPoint";
import HomeHero from "../components/Home/HomeHero";
import GiantClamRole from "../components/Home/GiantClamRole";
import GiantClamVulnerable from "../components/Home/GiantClamVulnerable";
import ProjectPartner from "../components/Home/ProjectPartner";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className=" bg-transparent">
      <Navbar />
      <HomeHero/>
      <MissionNVision/>
      <div className=" mt-10 sm:mt-10 md:mt-24 lg:mt-24 xl:mt-24">
        <NctfIntro/>
        <NctfObjective/>
        <NctfFocusPoint/>    
      </div>
      <GiantClamRole/>
      <GiantClamVulnerable/>
      <ProjectPartner/>
      <Footer/>
    </div>
  );
};

export default Home;
