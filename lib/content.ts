// All English copy + data for the BEST Chișinău one-pager.
// Keeping copy here (out of components) makes client-supplied gaps obvious.
//
// ⚠️ CLIENT-SUPPLIED SLOTS — replace the placeholders below:
//    APPLY_URL, CONTACT.email, CONTACT.socials, PARTNERS, and the exact
//    impact numbers in STATS. Everything else is final copy.

export const EST_YEAR = 2007;
export const BEST_FOUNDED = 1989;

/** Years LBG Chișinău has been active — auto-computed so it never goes stale. */
export const yearsActive = (): number =>
  new Date().getFullYear() - EST_YEAR;

/** Primary CTA destination. TODO(client): real application / membership form. */
export const APPLY_URL = "#apply";

export const SITE = {
  name: "BEST Chișinău",
  wordmark: "BEST",
  local: "LBG Chișinău",
  full: "Board of European Students of Technology",
  tagline: "Developing Students Since 2007",
  coordinates: "EST. 2007 · 47.0°N",
} as const;

export type NavLink = { label: string; href: string };
export const NAV: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Impact", href: "#impact" },
  { label: "Partners", href: "#partners" },
];

export const HERO = {
  eyebrow: "LBG Chișinău · BEST",
  meta: "EST. 2007 · 47.0°N",
  // The three poster lines; the 4th element (year) is rendered as the masthead.
  lines: ["Developing", "Students", "Since"],
  year: "2007",
  subhead:
    "We are BEST Chișinău — the local group of the Board of European Students of Technology. We turn curious technical students into confident builders, friends, and Europeans. Bring the curiosity; we'll develop the rest.",
  primaryCta: "Apply Now",
  secondaryCta: "About us",
};

export const ABOUT = {
  index: "01 / About",
  headline: ["We grow", "potential —", "the deliberate way"],
  keyword: "potential",
  body: [
    "BEST is a non-governmental, apolitical, non-profit organisation that has empowered technical students across Europe since 1989. Here in Moldova, LBG Chișinău has been at it since 2007 — running courses, talks, and hackathons that hand students the skills universities rarely teach.",
    "Our mission: help technically-inclined students unlock their potential, pick up real skills, and explore Moldova's culture along the way. Our vision: bring students from across Europe together under one set of goals — and one very good time.",
  ],
  imageCaption: "BEST Talks · 2026",
  imageStamp: "Frame 008",
};

export type Value = { n: string; name: string; gloss: string };
export const VALUES: Value[] = [
  { n: "01", name: "Flexibility", gloss: "We bend, adapt, and figure it out together." },
  { n: "02", name: "Friendship", gloss: "Strangers in September, family by spring." },
  { n: "03", name: "Fun", gloss: "If it isn't fun, we're doing it wrong." },
  { n: "04", name: "Improvement", gloss: "Leave a little braver than you arrived." },
  { n: "05", name: "Open-mindedness", gloss: "Every idea, every accent, welcome here." },
];
export const VALUES_INTRO = {
  index: "02 / Values",
  headline: "Five words we actually live by",
  body:
    "Not a poster in the office — it's how we plan an event, welcome a stranger, and decide what to try next.",
};

export type Activity = {
  n: string;
  name: string; // local / on-brand name
  en: string; // English gloss
  blurb: string;
  chip: string;
};
export const ACTIVITIES_INTRO = {
  index: "03 / Activities",
  headline: "What you can join",
  body:
    "Six flagship experiences, one local group. Ship code overnight, learn from people doing the work, or simply find your people. Pick a row, follow your curiosity, and we'll see you there.",
};
export const ACTIVITIES: Activity[] = [
  {
    n: "01",
    name: "Curs Sezonier",
    en: "Seasonal BEST Course",
    blurb:
      "Our flagship BEST Course. A week-long, fully-hosted academic adventure where students from across Europe land in Chișinău to learn a hard technical skill by day and discover Moldova by night. Lectures, hands-on workshops, new friends — zero tuition.",
    chip: "BEST Course · 1 week",
  },
  {
    n: "02",
    name: "BEST Talks",
    en: "Talk series",
    blurb:
      "An evening of straight talk from people who actually do the work. Engineers, founders, and researchers share what school leaves out — then stick around for the questions that matter.",
    chip: "Talk series · 1 night",
  },
  {
    n: "03",
    name: "Recrutări",
    en: "Recruitment",
    blurb:
      "The front door to BEST Chișinău. Twice a year we open up, meet the new faces, and welcome the next generation of members. No CV gymnastics — just curiosity, energy, and a willingness to build.",
    chip: "Recruitment · Spring & Autumn",
  },
  {
    n: "04",
    name: "Hackathon",
    en: "Build sprint",
    blurb:
      "One problem, one weekend, one very caffeinated room. Form a team, ship something real, and pitch it to a jury before the sun comes up. Mentors on hand, prizes on the table.",
    chip: "Build sprint · 24–48h",
  },
  {
    n: "05",
    name: "Evenimente Interne",
    en: "Internal events",
    blurb:
      "The glue. Game nights, team trips, and the low-key gatherings that turn a member list into a family — where friendships are made and the best ideas accidentally happen.",
    chip: "Members only · Year-round",
  },
  {
    n: "06",
    name: "Rube Goldberg",
    en: "Engineering challenge",
    blurb:
      "Our most gloriously over-engineered tradition: teams design an absurd chain-reaction machine to do something delightfully simple. Equal parts physics and chaos — and the loudest cheers of the year.",
    chip: "Engineering challenge · Annual",
  },
];

export const GALLERY_INTRO = {
  index: "04 / A Year in Frames",
  headline: "Proof, one frame at a time",
  body:
    "Grab the strip and pull. Real moments from BEST Talks and Spring Recruitment 2026 — late-night ideas, new friendships, and a healthy dose of Moldovan hospitality. No stock photos, no staging.",
  affordance: "Drag to explore",
  credit: "BEST Talks 26 · Recrutări Spring 26",
};

export type Stat = { value: string; label: string; computed?: "years"; accent?: boolean };
export const IMPACT = {
  index: "05 / Impact",
  headline: ["Where great", "experiences begin"],
  body:
    "Part of a network spanning 80+ universities across 30+ countries, BEST has opened doors for technical students since 1989 — and LBG Chișinău has carried that spirit in Moldova since 2007. The numbers are nice. The friendships are better.",
};
export const STATS: Stat[] = [
  { value: String(yearsActive()), label: "Years developing students in Chișinău", computed: "years", accent: true },
  { value: "80+", label: "Universities in the BEST network across Europe" },
  { value: "1.5K+", label: "Students reached through our events" },
  { value: "30+", label: "BEST events run, and counting" },
];

export type Partner = { name: string };
export const PARTNERS_INTRO = {
  index: "06 / Partners",
  headline: "Partenerii noștri",
  body:
    "None of this happens alone. Our partners — universities, companies, and sponsors — back the courses, fuel the hackathons, and open doors to the industry. Want to invest in the next generation of technical talent in Moldova? Let's talk.",
  cta: "Become a partner",
};
// TODO(client): replace with real partner names / logo assets.
export const PARTNERS: Partner[] = [
  { name: "UTM" },
  { name: "Your University" },
  { name: "Tech Partner" },
  { name: "Sponsor Co." },
  { name: "Industry Lab" },
  { name: "Community" },
];

export const FINAL_CTA = {
  headline: ["Let's make", "it happen"],
  accentWord: "happen",
  body:
    "Friendship, skills, fun, and a real taste of Moldovan culture — it all starts with one application. Whether you're a student in Chișinău or anywhere in Europe, there's a seat with your name on it.",
  button: "Apply Now",
  secondary: "Get in touch",
};

export const CONTACT = {
  // TODO(client): confirm the real address & handles.
  email: "chisinau@best-eu.org",
  city: "Chișinău, Moldova · 47.0°N",
  socials: [
    { label: "Instagram", handle: "@best_chisinau", href: "https://instagram.com/best_chisinau" },
    { label: "Facebook", handle: "/BESTChisinau", href: "https://facebook.com/BESTChisinau" },
    { label: "LinkedIn", handle: "/best-chisinau", href: "https://www.linkedin.com/company/best-chisinau" },
  ],
};

export const FOOTER = {
  blurb:
    "A local group of the Board of European Students of Technology: non-governmental, apolitical, and non-profit, developing technical students across Europe since 1989.",
  quickLinks: NAV,
  endOfRoll: "End of roll — 042 / 042",
};
