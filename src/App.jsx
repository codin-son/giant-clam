import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import Journey from "./pages/Journey";
import Work from "./pages/Work";
import FirstJourney from "./components/Journey/Journey-Page/FirstJourney";
import SecondJourney from "./components/Journey/Journey-Page/SecondJourney";
import ThirdJourney from "./components/Journey/Journey-Page/ThirdJourney";
import GiantClams from "./pages/GiantClams";
import ResearchLibrary from "./pages/ResearchLibrary";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/work" element={<Work />} />
      <Route path="/projects/technology" element={<Technology />} />
      <Route path="/projects/journey" element={<Journey />} />
      <Route path="/projects/journey/first-journey" element={<FirstJourney />} />
      <Route path="/projects/journey/second-journey" element={<SecondJourney />} />
      <Route path="/projects/journey/third-journey" element={<ThirdJourney />} />
      <Route path="/projects/giant-clams" element={<GiantClams />} />
      <Route path="/projects/research-library" element={<ResearchLibrary />} />
      <Route path="/projects/gallery" element={<Gallery />} />
      <Route path="/projects/about-us" element={<AboutUs />} />
    </Routes>
  );
}

export default App;