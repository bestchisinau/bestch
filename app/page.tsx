import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Activities } from "@/components/sections/Activities";
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
          <Activities />
          <Impact />
          <Partners />
          <FinalCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
