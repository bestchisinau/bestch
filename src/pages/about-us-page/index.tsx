import AboutCoverSection from './sections/about-cover-section'
import WhatIsBestSection from './sections/what-is-best-section'
import IdentitySection from './sections/identity-section'
import OurEventsSection from './sections/our-events-section'
import GallerySection from './sections/gallery-section'
import ReadyToChatSection from '../landing-page/sections/ready-to-chat-section'

const AboutUsPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu">
        <AboutCoverSection />
        <WhatIsBestSection />
        <IdentitySection />
        <OurEventsSection />
        <GallerySection />
        <hr className="w-full h-px bg-white/40" />
        <ReadyToChatSection />
        <hr className="w-full h-px bg-white/40" />
      </div>
    </div>
  )
}

export default AboutUsPage
