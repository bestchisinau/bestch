import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ValuesMarquee } from "@/components/sections/ValuesMarquee";
import { Activities } from "@/components/sections/Activities";
import { Gallery } from "@/components/sections/Gallery";
import { Impact } from "@/components/sections/Impact";
import { Partners } from "@/components/sections/Partners";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* Raised, opaque layer: scrolls up and over the sticky hero. */}
        <div className="relative z-10">
          <About />
          <ValuesMarquee />
          <Activities />
          <Gallery />
          <Impact />
          <Partners />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
