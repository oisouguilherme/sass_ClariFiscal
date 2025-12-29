import HeroSection from "./components/sections/HeroSection";
import AuthoritySection from "./components/sections/AuthoritySection";
import ProblemsSection from "./components/sections/ProblemsSection";
import SolutionSection from "./components/sections/SolutionSection";
import ServicesSection from "./components/sections/ServicesSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import DifferentialsSection from "./components/sections/DifferentialsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AuthoritySection />
      <ProblemsSection />
      <SolutionSection />
      <ServicesSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
