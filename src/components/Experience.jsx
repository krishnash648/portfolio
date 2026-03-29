import { Reveal } from "./Reveal";

const roles = [
  {
    company: "Biz4Group LLC",
    title: "Frontend Developer/ Business Analyst",
    highlights: [
      "Worked on CSO Non-Clinical website and client projects",
      "Improved UI consistency across multiple pages",
      "Fixed 15+ UI issues and enhanced responsiveness",
      "Ensured cross-browser compatibility",
    ],
  },
  {
    company: "Celebal Technologies",
    title: "Full Stack Developer",
    highlights: [
      "Built reusable UI components",
      "Integrated REST APIs for dynamic data",
      "Worked in Agile environment",
    ],
  },
  {
    company: "Cybersword",
    title: "Full Stack Developer",
    highlights: [
      "Developed UI for KPI dashboards",
      "Improved layout responsiveness and usability",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 section-shell sm:scroll-mt-28">
      <div className="page-gutter">
        <Reveal>
          <p className="section-eyebrow">Experience</p>
          <h2 className="section-title">Where I&apos;ve shipped real product work.</h2>
          <p className="body-lead mt-5 max-w-2xl">
            A concise track record across client sites, dashboards, and component-driven applications.
          </p>
        </Reveal>

        <div className="relative mt-12 sm:mt-16 md:mt-20">
          <div
            className="absolute left-[15px] top-4 bottom-4 hidden w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent md:block"
            aria-hidden
          />

          <ol className="flex flex-col gap-10 md:gap-14">
            {roles.map((role, i) => (
              <Reveal key={role.company} delay={i * 80}>
                <li className="group/role relative md:pl-[4.25rem]">
                  <span
                    className="absolute left-0 top-1 hidden h-8 w-8 rounded-full border-[3px] border-canvas bg-gradient-to-br from-accent to-amber-700/90 shadow-[0_0_28px_rgba(245,158,11,0.42)] ring-4 ring-accent/15 transition-transform duration-500 md:inline-block md:group-hover/role:scale-105"
                    aria-hidden
                  />
                  <div className="rounded-[1.75rem] border border-line bg-surface/45 p-6 backdrop-blur-md transition-all duration-300 ease-out sm:p-8 md:p-10 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-line-strong motion-safe:hover:shadow-[0_24px_64px_rgba(0,0,0,0.28)]">
                    <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.75rem]">
                          {role.company}
                        </h3>
                        <p className="mt-2 text-base font-bold text-accent sm:text-lg">{role.title}</p>
                      </div>
                      <span className="inline-flex w-fit rounded-full border border-line bg-canvas/70 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                        Industry experience
                      </span>
                    </div>
                    <div className="mt-6">
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">Key achievements</p>
                      <ul className="mt-4 space-y-3.5">
                        {role.highlights.map((line) => (
                          <li
                            key={line}
                            className="flex gap-3 rounded-xl border border-transparent bg-canvas/35 px-3.5 py-3 text-ink-muted transition-colors duration-300 ease-out sm:px-4 motion-safe:hover:border-line motion-safe:hover:bg-canvas/45"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(245,158,11,0.65)]" aria-hidden />
                            <span className="text-[0.9375rem] leading-relaxed sm:text-base">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
