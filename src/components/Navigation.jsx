import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
        scrolled
          ? "border-b border-line bg-canvas/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="page-gutter flex items-center justify-between gap-4 py-3.5 min-[400px]:gap-6 sm:py-4">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-tight text-ink transition-opacity duration-300 ease-out motion-safe:hover:opacity-80"
        >
          KS<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors duration-300 ease-out motion-safe:hover:bg-accent-soft motion-safe:hover:text-ink"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="mailto:sharmakrishna1605@gmail.com"
            className="hidden rounded-full border border-line-strong bg-surface-2 px-4 py-2 text-sm font-semibold text-ink transition-all duration-300 ease-out motion-safe:hover:border-accent/40 motion-safe:hover:bg-accent-soft md:inline-flex"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-lg border border-line bg-surface-2 text-ink transition-colors duration-200 active:scale-95 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 top-[64px] z-40 overflow-y-auto border-t border-line bg-canvas/95 px-4 pb-10 pt-6 backdrop-blur-xl min-[400px]:top-[68px] min-[400px]:px-5 sm:top-[72px] md:hidden"
          role="dialog"
        >
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-xl px-3 py-3.5 text-base font-semibold text-ink transition-colors duration-300 ease-out min-[400px]:px-4 min-[400px]:py-4 min-[400px]:text-lg active:bg-surface-2 motion-safe:hover:bg-surface-2"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="mailto:sharmakrishna1605@gmail.com"
            className="mt-6 block min-h-[48px] rounded-full border border-line-strong bg-surface-2 px-5 py-3 text-center text-sm font-semibold text-ink transition-colors duration-300 ease-out active:scale-[0.99] motion-safe:hover:border-accent/35 motion-safe:hover:bg-accent-soft"
            onClick={() => setOpen(false)}
          >
            Email me
          </a>
        </div>
      )}
    </header>
  );
}
