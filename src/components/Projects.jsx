import { Reveal } from "./Reveal";

const projects = [
  {
    name: "DashGenie",
    subtitle: "Admin Dashboard",
    stack: ["React.js", "Kanban board", "Data visualization"],
    points: [
      "Designed an interactive dashboard to manage tasks and visualize data efficiently",
      "Optimized state management to improve UI performance and render execution",
      "Implemented efficient data handling for scalable, real-time board updates",
    ],
    size: "large",
    live: "https://krishnash648.github.io/DashGenie/",
    github: "https://github.com/krishnash648/DashGenie",
  },
  {
    name: "Velvet Cart",
    subtitle: "E-Commerce Application",
    stack: ["Integrated APIs", "Reusable components", "Responsive UI"],
    points: [
      "Engineered a scalable e-commerce application processing dynamic API products",
      "Optimized lazy loading mechanisms to manage efficient data handling",
      "Integrated secure cart validation logic and modern component architecture",
    ],
    size: "medium",
    live: "https://krishnash648.github.io/the-velvet-cart/",
    github: "https://github.com/krishnash648/the-velvet-cart",
  },
  {
    name: "Golf Charity Platform",
    subtitle: "Event experiences",
    stack: ["Event-based UI", "Structured layout", "Responsive design"],
    points: [
      "Developed an event-based UI platform for managing charity tournament experiences",
      "Structured layout hierarchy yielding an engaging UI and improved accessibility",
      "Ensured extremely clean, responsive cross-device interactions",
    ],
    size: "medium",
    live: "https://golf-charity-platform-delta.vercel.app/",
    github: "https://github.com/krishnash648/golf-charity-platform",
  },
  {
    name: "Service Desk Application",
    subtitle: "Ticket management",
    stack: ["Ticket management", "API integration", "State management"],
    points: [
      "Built a ticket management system for creating and tracking operational issues",
      "Integrated complex REST endpoints with scalable state management architecture",
      "Streamlined issue resolution workflow into an intuitive, high-performance UI",
    ],
    size: "medium",
    live: "https://krishnash648.github.io/todo-app-celebal/",
    github: "https://github.com/krishnash648/todo-app-celebal",
  },
];

const profileGithub = "https://github.com/krishnash648";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 border-t border-line bg-surface/35 section-shell sm:scroll-mt-28">
      <div className="page-gutter">
        <Reveal>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title">Selected builds that mirror production complexity.</h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-9 sm:mt-16 sm:gap-12 md:gap-16">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <article
                className="group relative flex min-h-0 flex-col lg:grid lg:grid-cols-2 lg:gap-10 lg:items-stretch overflow-hidden rounded-3xl border border-line-strong/50 bg-gradient-to-br from-canvas/85 via-surface/50 to-canvas/60 p-6 shadow-[0_1px_0_rgba(255,220,180,0.05)_inset,0_28px_90px_-18px_rgba(0,0,0,0.55),0_0_0_1px_rgba(26,18,11,0.5)] transition-all duration-300 ease-out will-change-transform sm:rounded-[2rem] sm:p-9 md:p-12 lg:p-16 motion-safe:md:hover:-translate-y-1 motion-safe:md:hover:border-accent/30 motion-safe:md:hover:shadow-[0_1px_0_rgba(255,220,180,0.07)_inset,0_40px_100px_-20px_rgba(0,0,0,0.58),0_0_0_1px_rgba(245,158,11,0.18),var(--shadow-glow)] motion-safe:sm:hover:scale-[1.006] motion-safe:lg:hover:scale-[1.01]"
              >
                <div className="flex flex-1 flex-col lg:justify-between">
                  <div>
                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-5">
                      <div className="min-w-0 sm:pr-2">
                        <h3 className="font-display text-2xl font-extrabold tracking-[-0.03em] text-ink min-[400px]:text-3xl sm:text-4xl md:text-[2.6rem] md:leading-[1.06]">
                          {p.name}
                        </h3>
                        <p className="mt-3 max-w-prose text-base font-medium leading-snug text-ink-muted sm:mt-4 sm:text-lg md:text-xl">
                          {p.subtitle}
                        </p>
                      </div>
                      <span className={`w-fit shrink-0 self-start rounded-full border px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 sm:self-auto ${p.size === "large" ? "border-accent/40 bg-accent/10 text-accent ring-1 ring-accent/20" : "border-line bg-surface-2/90 text-ink-muted motion-safe:group-hover:border-accent/35 motion-safe:group-hover:text-ink"}`}>
                        {p.size === "large" ? "Featured Project" : "Project Build"}
                      </span>
                    </div>

                    <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-ink-muted/90 sm:mt-8">
                      Tech stack
                    </p>
                    <ul className="mt-3.5 flex flex-wrap gap-2.5">
                      {p.stack.map((tag) => (
                        <li key={tag}>
                          <span className="inline-flex rounded-full border border-line-strong/90 bg-canvas/55 px-4 py-1.5 text-xs font-semibold text-ink shadow-[0_1px_0_rgba(255,255,255,0.04)_inset] transition-all duration-300 ease-out motion-safe:group-hover:border-accent/30 motion-safe:group-hover:bg-canvas/70">
                            {tag}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-3 md:mt-12">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] w-full touch-manipulation flex-1 items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-bold tracking-wide text-canvas shadow-[0_1px_0_rgba(255,255,255,0.2)_inset,0_14px_36px_rgba(245,158,11,0.28)] ring-1 ring-amber-400/25 transition-all duration-300 ease-out active:scale-[0.98] sm:w-auto sm:flex-initial sm:px-9 motion-safe:sm:hover:-translate-y-0.5 motion-safe:sm:hover:scale-[1.03] motion-safe:sm:hover:shadow-[0_18px_44px_rgba(245,158,11,0.38)]"
                    >
                      View Project
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] w-full touch-manipulation flex-1 items-center justify-center rounded-full border border-line-strong bg-surface-2/85 px-7 py-3.5 text-sm font-bold tracking-wide text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-all duration-300 ease-out active:scale-[0.98] sm:w-auto sm:flex-initial sm:px-9 motion-safe:sm:hover:-translate-y-0.5 motion-safe:sm:hover:scale-[1.02] motion-safe:sm:hover:border-accent/40 motion-safe:sm:hover:bg-accent-soft"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="mt-8 border-t border-line pt-8 sm:pt-10 lg:mt-0 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink-muted">Highlights</p>
                  <ul className="mt-6 space-y-4">
                    {p.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm leading-[1.65] text-ink-muted sm:text-[0.9375rem] sm:leading-relaxed"
                      >
                        <span className="mt-0.5 font-mono text-sm leading-none text-accent" aria-hidden>
                          —
                        </span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
