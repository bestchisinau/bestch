"use client";

import Image from "next/image";
import { useLenis } from "@/components/providers/SmoothScroll";
import { SITE, FOOTER, CONTACT } from "@/lib/content";
import logo from "@/assets/logos/best-chisinau.png";

export function Footer() {
  const { scrollTo } = useLenis();

  return (
    <footer className="bg-charcoal text-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <button onClick={() => scrollTo("#hero")} aria-label={`${SITE.wordmark} Chișinău — top`}>
              <Image src={logo} alt={`${SITE.wordmark} Chișinău`} className="h-12 w-auto md:h-14" />
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
      </div>
    </footer>
  );
}
