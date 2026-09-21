import { MotionProvider } from './motion/primitives'
import HeroSection from './sections/hero-section'
import ExplainerSection from './sections/explainer-section'
import ChallengeSection from './sections/challenge-section'
import ReasonsSection from './sections/reasons-section'
import ProgrammeSection from './sections/programme-section'
import TeamsSection from './sections/teams-section'
import TimelineSection from './sections/timeline-section'
import FaqSection from './sections/faq-section'
import SponsorsSection from './sections/sponsors-section'
import AboutBestSection from './sections/about-best-section'
import FinalSection from './sections/final-section'
import './rube-goldberg.css'

const RubeGoldbergPage = () => (
  <MotionProvider>
    <div className="rg-page">
      <HeroSection />
      <ExplainerSection />
      <ChallengeSection />
      <ReasonsSection />
      <ProgrammeSection />
      <TeamsSection />
      <TimelineSection />
      <FaqSection />
      <SponsorsSection />
      <AboutBestSection />
      <FinalSection />
    </div>
  </MotionProvider>
)

export default RubeGoldbergPage
