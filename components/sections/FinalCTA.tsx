import Image from "next/image";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FINAL_CTA, APPLY_URL, CONTACT } from "@/lib/content";
import { CTA_IMAGE } from "@/lib/gallery";

export function FinalCTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-charcoal text-paper">
      {/* Full-bleed duotone photo takeover */}
      <div data-develop aria-hidden className="absolute inset-0">
        <Image
          src={CTA_IMAGE.full}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/90" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-[1400px] flex-col items-center justify-center px-5 py-28 text-center md:px-10 md:py-40">
        <SplitText
          as="h2"
          lines={FINAL_CTA.headline}
          accent={FINAL_CTA.accentWord}
          className="font-display text-[clamp(2.75rem,11vw,9rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-paper"
        />
        <p data-reveal className="mt-8 max-w-xl text-lg text-paper/70 md:text-xl">
          {FINAL_CTA.body}
        </p>
        <div data-reveal className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
          <MagneticButton href={APPLY_URL} variant="onDark" size="pill-lg" cursorLabel="JOIN" fill>
            {FINAL_CTA.button}
          </MagneticButton>
          <a
            href={`mailto:${CONTACT.email}`}
            className="group inline-flex items-center gap-2 font-sans text-base text-paper/70 transition-colors hover:text-paper"
          >
            {FINAL_CTA.secondary}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
