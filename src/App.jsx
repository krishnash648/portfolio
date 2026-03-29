import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-canvas text-ink">
      <div
        className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_85%_60%_at_50%_-10%,rgba(245,158,11,0.07),transparent_55%)] opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,210,170,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,210,170,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, black 20%, transparent 75%)",
        }}
        aria-hidden
      />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
