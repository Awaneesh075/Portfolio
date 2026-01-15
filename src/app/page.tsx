import Hero from "@/components/section/hero";
import About from "@/components/section/about";
import Experience from "@/components/section/experience";
import Projects from "@/components/section/projects";
import Contact from "@/components/section/contact";
import Chatbot from "@/components/chatbot";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Chatbot />
    </>
  );
}
