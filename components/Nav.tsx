"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@/components/providers/SmoothScroll";
import { NAV, SITE, APPLY_URL } from "@/lib/content";

const SECTION_IDS = ["hero", "about", "activities", "impact", "partners", "cta"];

export function Nav() {
  const { scrollTo } = useLenis();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("hero");
  const menuRef = useRef<HTMLDivElement>(null);

  // Active section + solid bar, from scroll.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    const onScroll = () => {
      const h = document.documentElement;
      setSolid(h.scrollTop > h.clientHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Animate the mobile overlay open/close.
  useGSAP(
    () => {
      const el = menuRef.current;
      if (!el) return;
      if (open) {
        gsap.set(el, { display: "flex" });
        gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.6, ease: "expo.out" });
        gsap.fromTo(
          el.querySelectorAll("[data-menu-item]"),
          { yPercent: 120, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out", delay: 0.12 },
        );
      } else {
        gsap.to(el, {
          clipPath: "inset(0 0 100% 0)",
          duration: 0.45,
          ease: "power3.in",
          onComplete: () => gsap.set(el, { display: "none" }),
        });
      }
    },
    { dependencies: [open] },
  );

  const go = (href: string) => {
    setOpen(false);
    scrollTo(href, { offset: -10 });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          solid ? "bg-paper/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:h-20 md:px-10">
          <button
            onClick={() => go("#hero")}
            className={`font-display text-lg font-semibold tracking-tight transition-colors ${
              solid ? "text-ink" : "text-paper"
            }`}
          >
            {SITE.wordmark}
            <span className="text-sun">.</span>
            <span
              className={`ml-1 hidden font-sans text-sm font-normal sm:inline ${
                solid ? "text-ink/55" : "text-paper/70"
              }`}
            >
              Chișinău
            </span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {NAV.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className={`relative font-sans text-sm tracking-tight transition-colors ${
                  active === link.href.slice(1)
                    ? solid
                      ? "text-ink"
                      : "text-paper"
                    : solid
                      ? "text-ink/55 hover:text-ink"
                      : "text-paper/70 hover:text-paper"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-sun transition-all duration-300 ${
                    active === link.href.slice(1) ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
            <a
              href={APPLY_URL}
              className="rounded-pill bg-charcoal px-5 py-2.5 font-sans text-sm font-medium text-surface transition-colors hover:bg-charcoal/90"
            >
              Apply now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-6 ${open || !solid ? "bg-paper" : "bg-ink"} transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-6 ${open || !solid ? "bg-paper" : "bg-ink"} transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-6 ${open || !solid ? "bg-paper" : "bg-ink"} transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden flex-col justify-center gap-2 bg-charcoal px-8 md:hidden"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        {NAV.map((link) => (
          <button
            key={link.href}
            data-menu-item
            onClick={() => go(link.href)}
            className="overflow-hidden text-left font-display text-5xl font-semibold tracking-tight text-paper"
          >
            {link.label}
          </button>
        ))}
        <a
          data-menu-item
          href={APPLY_URL}
          onClick={() => setOpen(false)}
          className="mt-6 inline-flex w-fit rounded-pill bg-sun px-8 py-4 font-sans text-lg font-medium text-surface"
        >
          Apply now
        </a>
      </div>
    </>
  );
}
