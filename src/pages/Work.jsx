import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Work/Hero";
import PrimaryObj from "../components/Work/PrimaryObj";
import ProblemStat from "../components/Work/ProblemStat";
import ProjectPoint from "../components/Work/ProjectPoint";
const Work = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="container mx-auto">
          <Hero />
          <PrimaryObj />
          <ProblemStat />
          <ProjectPoint />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Work;
