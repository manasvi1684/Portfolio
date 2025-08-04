import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ThreeDBackground from "../components/3DBackground";

export default function Home() {
  return (
    <div className="bg-[#12002f] text-white min-h-screen flex flex-col relative overflow-hidden">
      <ThreeDBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex flex-col items-center px-4 sm:px-8 w-full">
          <div id="home">
            <Hero />
          </div>
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <Education />
        </main>
        <Contact />
      </div>
    </div>
  );
}
