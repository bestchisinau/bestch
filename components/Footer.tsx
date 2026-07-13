"use client";

import { useLenis } from "@/components/providers/SmoothScroll";
import { SITE, FOOTER, CONTACT, BEST_FOUNDED } from "@/lib/content";

export function Footer() {
  const { scrollTo } = useLenis();

  return (
    <footer className="bg-charcoal text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <button
              onClick={() => scrollTo("#hero")}
              className="font-display text-4xl font-semibold tracking-tight"
            >
              {SITE.wordmark}
              <span className="text-sun">.</span>
            </button>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/55">{FOOTER.blurb}</p>
          </div>

          <nav className="md:col-span-3">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">
              Quick links
            </p>
            <ul className="space-y-2.5">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href, { offset: -10 })}
                    className="text-base text-paper/70 transition-colors hover:text-sun"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-4">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/40">
              Contact
            </p>
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-base text-paper/80 underline-offset-4 hover:text-sun hover:underline"
            >
              {CONTACT.email}
            </a>
            <p className="mt-1 text-sm text-paper/45">{CONTACT.city}</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {CONTACT.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/70 transition-colors hover:text-sun"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/15 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>{FOOTER.endOfRoll}</span>
          <span>
            © {new Date().getFullYear()} {SITE.name} · {SITE.full}, since {BEST_FOUNDED}
          </span>
          <button onClick={() => scrollTo("#hero")} className="text-left hover:text-sun sm:text-right">
            ↑ Rewind to top
          </button>
        </div>
      </div>
    </footer>
  );
}
