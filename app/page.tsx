import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import CopilotStudio from "@/components/CopilotStudio";
import PlatformArchitecture from "@/components/PlatformArchitecture";
import OutSystems from "@/components/OutSystems";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import SkillsViz from "@/components/SkillsViz";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <CopilotStudio />
      <PlatformArchitecture />
      <OutSystems />
      <Projects />
      <Timeline />
      <Certifications />
      <SkillsViz />
      <WhyHireMe />
      <Contact />
      <Footer />
    </main>
  );
}
