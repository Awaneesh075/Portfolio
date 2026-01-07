import Hero from "@/components/section/hero";
import About from "@/components/section/about";
import Experience from "@/components/section/experience";
import Projects from "@/components/section/projects";
import Skills from "@/components/section/skills";
import Certifications from "@/components/section/certifications";
import Resume from "@/components/section/resume";
import Contact from "@/components/section/contact";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Resume />
      <Contact />
    </main>
  );
}
