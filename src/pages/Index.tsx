import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CapabilitiesCarousel from "@/components/CapabilitiesCarousel";
import About from "@/components/About";
import Services from "@/components/Services";
import AIModules from "@/components/AIModules";
import Statistics from "@/components/Statistics";
import DataResults from "@/components/DataResults";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import FloatingStats from "@/components/FloatingStats";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <SectionDivider variant="gradient" />
      <CapabilitiesCarousel />
      <SectionDivider variant="dots" />
      <FloatingStats />
      <SectionDivider variant="wave" />
      <About />
      <SectionDivider variant="default" />
      <Services />
      <SectionDivider variant="gradient" />
      <AIModules />
      <SectionDivider variant="dots" />
      <Statistics />
      <SectionDivider variant="wave" />
      <DataResults />
      <SectionDivider variant="gradient" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
