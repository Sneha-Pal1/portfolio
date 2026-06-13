import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Work from "@/components/sections/Work";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import GithubSection from "@/components/sections/GithubSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <Hero />
      <CurrentlyBuilding />
      <Work />
      <About />
      <Skills />
      <Experience />
      <GithubSection />
      <Contact />
    </main>
  );
}
