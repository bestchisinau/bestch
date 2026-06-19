import { SplitText } from "@/components/ui/SplitText";
import { PARTNERS, PARTNERS_INTRO, APPLY_URL } from "@/lib/content";

export function Partners() {
  return (
    <section id="partners" className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">
              {PARTNERS_INTRO.index}
            </p>
            <SplitText
              as="h2"
              lines={[PARTNERS_INTRO.headline]}
              className="font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1] tracking-[-0.02em] text-ink"
            />
            <p data-reveal className="mt-6 max-w-md text-lg text-ink/65">
              {PARTNERS_INTRO.body}
            </p>
            <a
              href={APPLY_URL}
              className="mt-8 inline-flex items-center gap-2 font-sans text-base font-medium text-ink underline-offset-4 hover:underline"
            >
              {PARTNERS_INTRO.cta} <span aria-hidden>→</span>
            </a>
          </div>

          <div className="md:col-span-7">
            {/* TODO(client): swap text placeholders for real partner logos */}
            <ul className="grid grid-cols-2 border-l border-t border-ink/12 sm:grid-cols-3">
              {PARTNERS.map((p) => (
                <li
                  key={p.name}
                  data-reveal
                  className="group flex aspect-[3/2] items-center justify-center border-b border-r border-ink/12 px-4"
                >
                  <span className="font-display text-xl font-semibold tracking-tight text-ink/30 transition-colors duration-300 group-hover:text-ink">
                    {p.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
