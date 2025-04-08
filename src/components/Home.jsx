import HeroSection from "../pages/Hero";
import Features from "../pages/Features";
import Testimonials from "../pages/Testimonials";
import ChatBot from "../pages/ChatBot";
import About from "../pages/About";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen">
      <HeroSection />

      {/* About section with id */}
      <div id="about">
        <About />
      </div>

      <Features />
      <Testimonials />
      <ChatBot />
    </div>
  );
};

export default Home;
