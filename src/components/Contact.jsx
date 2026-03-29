import { useState } from "react";
import { Reveal } from "./Reveal";

const links = [
  {
    label: "Email",
    href: "mailto:sharmakrishna1605@gmail.com",
    display: "sharmakrishna1605@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/krishnash648",
    display: "github.com/krishnash648",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/krishna-sharma-539184215",
    display: "linkedin.com/in/krishna-sharma-539184215",
  },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const subject = name.trim() ? `Portfolio: ${name.trim()}` : "Portfolio inquiry";
    const body = [message.trim() && message.trim(), name.trim() && `Name: ${name.trim()}`, email.trim() && `Email: ${email.trim()}`]
      .filter(Boolean)
      .join("\n\n");
    const mailto = `mailto:sharmakrishna1605@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 border-t border-line bg-gradient-to-b from-surface/55 via-canvas/80 to-canvas section-shell sm:scroll-mt-28"
    >
      <div className="page-gutter">
        <Reveal>
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build something polished together.</h2>
          <p className="body-lead mt-6 max-w-xl font-medium text-accent">
            Open to internships and full-time opportunities.
          </p>
          <p className="mt-3 max-w-xl text-lg font-medium leading-relaxed text-ink-muted sm:text-xl md:leading-snug">
            Prefer email — I typically reply within a day. Links below stay current.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <Reveal delay={80} className="lg:col-span-5">
            <div className="rounded-[1.75rem] border border-line bg-surface/45 p-5 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">Send a message</p>
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Name</span>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                    className="mt-2 w-full rounded-xl border border-line bg-canvas/50 px-4 py-3 text-base font-medium text-ink outline-none transition-[color,box-shadow,border-color] duration-300 ease-out placeholder:text-ink-muted/50 focus:border-accent/40 focus:ring-2 focus:ring-accent/20 sm:text-sm"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="mt-2 w-full rounded-xl border border-line bg-canvas/50 px-4 py-3 text-base font-medium text-ink outline-none transition-[color,box-shadow,border-color] duration-300 ease-out placeholder:text-ink-muted/50 focus:border-accent/40 focus:ring-2 focus:ring-accent/20 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Message</span>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="mt-2 w-full resize-y rounded-xl border border-line bg-canvas/50 px-4 py-3 text-base font-medium text-ink outline-none transition-[color,box-shadow,border-color] duration-300 ease-out placeholder:text-ink-muted/50 focus:border-accent/40 focus:ring-2 focus:ring-accent/20 sm:text-sm"
                    placeholder="What are we building?"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-canvas shadow-[0_12px_32px_rgba(245,158,11,0.22)] transition-all duration-300 ease-out active:scale-[0.98] sm:w-auto motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.03] motion-safe:hover:shadow-[0_16px_40px_rgba(245,158,11,0.35)]"
                >
                  Open in email
                </button>
              </form>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-7">
            <Reveal delay={120} className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-1 xl:grid-cols-3">
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="group rounded-[1.5rem] border border-line bg-surface/40 p-5 transition-all duration-300 ease-out sm:p-7 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-accent/35 motion-safe:hover:bg-accent-soft motion-safe:hover:shadow-[0_20px_48px_rgba(0,0,0,0.22)]"
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-ink-muted">{item.label}</p>
                  <p className="mt-4 break-words font-display text-base font-semibold text-ink transition-colors duration-300 ease-out motion-safe:group-hover:text-accent sm:text-lg">
                    {item.display}
                  </p>
                </a>
              ))}
            </Reveal>

            <Reveal delay={200} className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="mailto:sharmakrishna1605@gmail.com"
                className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-bold tracking-wide text-canvas shadow-[0_12px_32px_rgba(245,158,11,0.2)] transition-all duration-300 ease-out active:scale-[0.98] sm:w-auto sm:py-4 motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.03] motion-safe:hover:shadow-[0_16px_40px_rgba(245,158,11,0.32)]"
              >
                Email Krishna
              </a>
              <a
                href="https://github.com/krishnash648"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full touch-manipulation items-center justify-center rounded-full border border-line-strong bg-surface-2/80 px-8 py-3.5 text-sm font-bold tracking-wide text-ink transition-all duration-300 ease-out active:scale-[0.98] sm:w-auto sm:py-4 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-accent/35 motion-safe:hover:bg-accent-soft"
              >
                View GitHub
              </a>
            </Reveal>
          </div>
        </div>
      </div>

      <footer className="page-gutter mt-20 border-t border-line pt-10 sm:mt-24 sm:pt-12">
        <p className="text-center text-sm text-ink-muted">
          © {new Date().getFullYear()} Krishna Sharma. Built with React & Tailwind.
        </p>
      </footer>
    </section>
  );
}
