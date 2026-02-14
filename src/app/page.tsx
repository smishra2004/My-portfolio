import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Projects from "@/components/sections/Projects";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BorderWrapper from "@/components/layout/BorderWrapper";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/sections/Footer";
import ResumeCTA from "@/components/sections/ResumeCTA";

export default function Home() {
  return (
    <main className="relative text-white overflow-x-hidden">

      <AnimatedBackground />
      <Navbar />
      <Hero />

      {/* Strips start here */}
      <BorderWrapper>
        <About />
        <Projects />
        <SkillsSection />
        <ExperienceSection />
        <ResumeCTA />
        <Footer />
        {/* other sections */}
      </BorderWrapper>

    </main>
  );
}
