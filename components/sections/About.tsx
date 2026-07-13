import Image from "next/image";
import { SplitText } from "@/components/ui/SplitText";
import { ABOUT } from "@/lib/content";
import { ABOUT_IMAGE } from "@/lib/gallery";

export function About() {
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <p className="mb-10 border-b border-ink/12 pb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">
          {ABOUT.index}
        </p>
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <SplitText
              as="h2"
              lines={ABOUT.headline}
              accent={ABOUT.keyword}
              className="font-display text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink"
            />
            <div className="mt-8 max-w-xl space-y-5 md:mt-12">
              {ABOUT.body.map((p, i) => (
                <p key={i} data-reveal className="text-lg leading-relaxed text-ink/70">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative ml-auto w-full max-w-sm">
              <div
                data-develop
                className="relative aspect-[3/4] w-full overflow-hidden rounded-card bg-paper"
              >
                <Image
                  src={ABOUT_IMAGE.full}
                  alt={ABOUT_IMAGE.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 32vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
