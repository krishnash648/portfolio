import { Reveal } from "./Reveal";

const IconJs = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>;
const IconReact = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4" transform="rotate(-45 12 12)"/></svg>;
const IconNode = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>;
const IconExpress = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>;
const IconApi = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>;
const IconMongo = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>;
const IconGit = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
const IconVscode = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconPostman = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const IconChrome = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>;
const IconAws = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19c1.93 0 3.5-1.57 3.5-3.5a3.5 3.5 0 0 0-3.32-3.49C17 9.24 14.77 7 12 7c-2.5 0-4.61 1.77-5.06 4.14A4.5 4.5 0 0 0 7.5 20h10z"/></svg>;

const groups = [
  {
    label: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", icon: <IconJs /> },
      { name: "React.js", icon: <IconReact /> }
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: "Node.js", icon: <IconNode /> },
      { name: "Express.js", icon: <IconExpress /> },
      { name: "REST APIs", icon: <IconApi /> },
      { name: "MongoDB", icon: <IconMongo /> },
    ],
  },
  {
    label: "Tooling",
    items: [
      { name: "Git & GitHub", icon: <IconGit /> },
      { name: "VS Code", icon: <IconVscode /> },
      { name: "Postman", icon: <IconPostman /> },
      { name: "Chrome DevTools", icon: <IconChrome /> },
      { name: "AWS", icon: <IconAws /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 border-t border-line bg-surface/25 section-shell sm:scroll-mt-28">
      <div className="page-gutter">
        <Reveal>
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-title">Tools I reach for on real teams.</h2>
          <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-ink-muted sm:text-xl">
            Technologies I use to build scalable, real-world applications.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 sm:mt-16 md:mt-20 md:grid-cols-3 lg:gap-12">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 90}>
              <div className="flex h-full flex-col rounded-[1.25rem] border border-line bg-surface/40 p-6 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] sm:p-8">
                <h3 className="border-b-2 border-accent/20 pb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-ink">
                  {g.label}
                </h3>
                <ul className="mt-6 grid grid-cols-1 gap-3.5 min-[520px]:grid-cols-2 md:grid-cols-1">
                  {g.items.map((skill) => (
                    <li key={skill.name}>
                      <span className="group flex min-h-[3.25rem] items-center gap-3.5 rounded-xl border border-line-strong/60 bg-canvas/70 px-4 py-3 text-[0.9rem] font-bold text-ink shadow-[0_1px_0_rgba(255,255,255,0.02)_inset] transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:scale-[1.03] motion-safe:hover:border-accent/50 motion-safe:hover:bg-accent/10 motion-safe:hover:shadow-[0_8px_24px_rgba(245,158,11,0.15)]">
                        <div className="text-accent/70 transition-colors duration-300 group-hover:text-accent">
                          {skill.icon}
                        </div>
                        <span>{skill.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
