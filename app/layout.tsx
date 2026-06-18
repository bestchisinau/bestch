import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { Reveals } from "@/components/motion/Reveals";

/* Display face — Clash Display (Fontshare, free), stands in for DESIGN.md "Ease Display" */
const clash = localFont({
  src: "./fonts/ClashDisplay-Variable.woff2",
  variable: "--font-clash",
  weight: "200 700",
  display: "swap",
  adjustFontFallback: "Arial",
  declarations: [{ prop: "size-adjust", value: "104%" }],
});

/* Body / labels — General Sans (Fontshare, free), stands in for DESIGN.md "Ease Standard" */
const general = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  variable: "--font-general",
  weight: "200 700",
  display: "swap",
  adjustFontFallback: "Arial",
});

/* Monospace — the film-roll HUD + loader counter */
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://best-chisinau.example"),
  title: {
    default: "BEST Chișinău — Developing Students Since 2007",
    template: "%s · BEST Chișinău",
  },
  description:
    "BEST Chișinău (LBG Chișinău) is the local group of the Board of European Students of Technology. We help technical students grow their potential, learn new skills, and explore Moldova — through courses, talks, hackathons and more. Bring the curiosity; we'll develop the rest.",
  keywords: [
    "BEST",
    "BEST Chișinău",
    "Board of European Students of Technology",
    "LBG Chișinău",
    "student organisation Moldova",
    "BEST Course",
    "hackathon Chișinău",
    "engineering students Europe",
  ],
  openGraph: {
    type: "website",
    locale: "en",
    title: "BEST Chișinău — Developing Students Since 2007",
    description:
      "Friendship, skills, fun and a real taste of Moldovan culture — it all starts with one application. Join BEST Chișinău.",
    siteName: "BEST Chișinău",
  },
  twitter: {
    card: "summary_large_image",
    title: "BEST Chișinău — Developing Students Since 2007",
    description:
      "The local group of the Board of European Students of Technology, in Moldova since 2007.",
  },
};

/* Runs before paint: marks JS on (so reveal-gating CSS engages) and tags
   reduced-motion. No-JS users never get `.js`, so all content stays visible. */
const gatingScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('rm');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${clash.variable} ${general.variable} ${geistMono.variable}`}
    >
      <body className="bg-paper text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: gatingScript }} />
        <Loader />
        <CustomCursor />
        <SmoothScroll>
          {children}
          <Reveals />
        </SmoothScroll>
      </body>
    </html>
  );
}
