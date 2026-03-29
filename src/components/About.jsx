import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 border-t border-line bg-surface/40 section-shell sm:scroll-mt-28">
      <div className="page-gutter">
        <Reveal>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">Crafting interfaces that feel intentional, fast, and human.</h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 max-w-3xl sm:mt-12">
          <p className="body-lead">
            I enjoy building clean, scalable web applications and solving real-world problems. Started with frontend and expanded into full stack development, working with APIs, backend logic, and performance optimization.
          </p>
        </Reveal>

        <Reveal delay={180} className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-display font-extrabold tracking-tight text-ink md:text-3xl">What I Can Do</h3>
            <ul className="mt-6 flex flex-col gap-5">
              {[
                "Build full stack web applications (React + Node.js)",
                "Create responsive and modern UI",
                "Integrate REST APIs and backend systems",
                "Optimize performance and scalability",
              ].map((item) => (
                <li key={item} className="group flex items-start gap-4 text-ink-muted transition-colors duration-300 hover:text-ink">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(245,158,11,0.65)] transition-transform duration-300 group-hover:scale-125" aria-hidden />
                  <span className="text-[1.05rem] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="rounded-3xl border border-line-strong/50 bg-gradient-to-br from-canvas/80 to-surface/40 p-8 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset,0_24px_64px_-16px_rgba(0,0,0,0.3)] lg:col-span-5 lg:p-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-ink-muted">Currently Learning</h3>
            <ul className="mt-8 flex flex-col gap-6">
              {["Backend architecture", "Advanced React patterns", "Performance optimization"].map((item) => (
                <li key={item} className="flex items-center gap-4 text-ink">
                  <span className="h-px w-8 bg-line-strong transition-all duration-300 hover:bg-accent hover:w-12" aria-hidden />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
