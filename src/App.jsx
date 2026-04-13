import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CampaignDetails from "./pages/CampaignDetails";
import AboutSection from "./pages/AboutSection";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign/:id" element={<CampaignDetails />} />
        <Route path="/about/" element={<AboutSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;