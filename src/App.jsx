import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CampaignDetails from "./pages/CampaignDetails";
import AboutSection from "./pages/AboutSection";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import LearnMore from "./pages/LearnMore";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/about/" element={<AboutSection />} />
        <Route path="/donate/:id" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;