import { ProfileFlip } from "./ProfileFlip";

export function Hero() {
  return (
    <section className="relative flex min-h-dvh min-h-[100dvh] flex-col overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_20%,rgba(245,158,11,0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_85%,rgba(180,83,9,0.08),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-canvas via-transparent to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-[8%] h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[100px] animate-float"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-[5%] h-[380px] w-[380px] rounded-full bg-amber-600/8 blur-[90px] animate-float"
        style={{ animationDelay: "-5s" }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[42%] -z-0 hidden -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(3.5rem,17vw,11rem)] font-black uppercase leading-none tracking-[-0.06em] text-ink/[0.045] sm:block sm:text-ink/[0.06]"
        aria-hidden
      >
        FULL STACK
      </div>
      <div
        className="pointer-events-none absolute left-1/2 top-[38%] -z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[clamp(2.75rem,14vw,6rem)] font-black uppercase leading-none tracking-[-0.05em] text-ink/[0.055] sm:hidden"
        aria-hidden
      >
        FULL STACK
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center py-20 pt-28 sm:py-24 sm:pt-36 lg:py-16 lg:pt-32">
        <div className="page-gutter flex w-full flex-1 flex-col justify-center">
          <div className="flex flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
            <div className="relative z-10 min-w-0 flex-1">
              <div
                className="mb-7 inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-line bg-surface/75 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted shadow-[0_0_0_1px_rgba(245,158,11,0.06)_inset] backdrop-blur-sm min-[400px]:px-4 min-[400px]:text-xs min-[400px]:tracking-[0.22em] sm:mb-8"
                style={{ animation: "hero-slide 0.95s cubic-bezier(0.16, 1, 0.3, 1) both" }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_16px_rgba(245,158,11,0.75)]" />
                React · JavaScript · Production UI
              </div>

              <h1
                className="font-display text-[clamp(2.6rem,calc(0.45rem+11vw),6.5rem)] font-extrabold leading-[0.92] tracking-[-0.04em] text-ink min-[400px]:leading-[0.9] sm:tracking-[-0.048em]"
                style={{ animation: "hero-slide 1s cubic-bezier(0.16, 1, 0.3, 1) 60ms both" }}
              >
                Krishna
                <br />
                <span className="text-ink-muted">Sharma</span>
              </h1>

              <p
                className="mt-6 max-w-xl text-lg font-bold tracking-tight text-accent min-[400px]:mt-8 min-[400px]:text-xl sm:text-2xl"
                style={{ animation: "hero-slide 1s cubic-bezier(0.16, 1, 0.3, 1) 120ms both" }}
              >
                Full Stack Developer
              </p>

              <p
                className="body-lead mt-4 max-w-2xl min-[400px]:mt-6"
                style={{ animation: "hero-slide 1s cubic-bezier(0.16, 1, 0.3, 1) 180ms both" }}
              >
                Full Stack Developer with 6 months of hands-on experience building scalable and user-friendly web applications.
              </p>

              <div
                className="mt-10 flex w-full flex-col gap-3 min-[400px]:mt-12 sm:mt-14 lg:mt-16 lg:w-auto lg:flex-row lg:flex-wrap lg:items-center lg:gap-4"
                style={{ animation: "hero-slide 1s cubic-bezier(0.16, 1, 0.3, 1) 240ms both" }}
              >
                <a
                  href="#projects"
                  className="group inline-flex min-h-[3rem] w-full touch-manipulation items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-canvas shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_12px_40px_rgba(245,158,11,0.28),0_0_0_1px_rgba(245,158,11,0.35)] transition-all duration-300 ease-out active:scale-[0.98] sm:min-h-12 sm:w-auto sm:px-9 sm:py-4 motion-safe:sm:hover:scale-[1.03] motion-safe:sm:hover:shadow-[0_16px_48px_rgba(245,158,11,0.4),0_1px_0_rgba(255,255,255,0.25)_inset]"
                >
                  <span className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5">
                    View Projects
                  </span>
                </a>
                <a
                  href="#contact"
                  className="group inline-flex min-h-[3rem] w-full touch-manipulation items-center justify-center rounded-full border border-line-strong bg-surface-2/95 px-8 py-3.5 text-sm font-bold tracking-wide text-ink shadow-[0_0_0_1px_rgba(245,158,11,0.07)_inset] transition-all duration-300 ease-out active:scale-[0.98] sm:min-h-12 sm:w-auto sm:px-9 sm:py-4 motion-safe:sm:hover:scale-[1.02] motion-safe:sm:hover:border-accent/45 motion-safe:sm:hover:bg-accent-soft motion-safe:sm:hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)]"
                >
                  <span className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5">
                    Contact
                  </span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[3rem] w-full touch-manipulation items-center justify-center rounded-full border border-line-strong bg-surface-2/95 px-8 py-3.5 text-sm font-bold tracking-wide text-ink shadow-[0_0_0_1px_rgba(245,158,11,0.07)_inset] transition-all duration-300 ease-out active:scale-[0.98] sm:min-h-12 sm:w-auto sm:px-9 sm:py-4 motion-safe:sm:hover:scale-[1.02] motion-safe:sm:hover:border-accent/45 motion-safe:sm:hover:bg-accent-soft motion-safe:sm:hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)]"
                >
                  <span className="transition-transform duration-300 ease-out motion-safe:group-hover:translate-x-0.5">
                    Download Resume
                  </span>
                </a>
              </div>
            </div>

            <div
              className="relative z-10 flex shrink-0 justify-center lg:justify-end"
              style={{ animation: "hero-slide 1s cubic-bezier(0.16, 1, 0.3, 1) 180ms both" }}
            >
              <ProfileFlip />
            </div>
          </div>

          <div
            className="mt-14 grid gap-4 border-t border-line pt-10 min-[400px]:mt-16 min-[400px]:pt-12 sm:mt-20 sm:grid-cols-3 sm:gap-6 sm:pt-14 lg:mt-24"
            style={{ animation: "var(--animate-fade-in)", animationDelay: "420ms" }}
          >
            {[
              { k: "Focus", v: "Product-grade UI" },
              { k: "Stack", v: "React · JavaScript" },
              { k: "Based", v: "Remote-ready" },
            ].map(({ k, v }) => (
              <div
                key={k}
                className="rounded-2xl border border-line bg-surface/50 px-5 py-4 backdrop-blur-sm transition-all duration-300 ease-out min-[400px]:px-6 min-[400px]:py-5 motion-safe:hover:border-accent/25 motion-safe:hover:shadow-[0_20px_48px_rgba(0,0,0,0.28)]"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">{k}</p>
                <p className="mt-3 font-display text-lg font-semibold text-ink">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
