import { Fragment } from 'react'
import WebDesignCoverSection from './sections/web-design-cover-section'
import ReadyToChatSection from '../landing-page/sections/ready-to-chat-section'
import ServiceParagraph from '../../components/service-paragraph'

const WebDesignPage = () => {
  const paragraphs = [
    {
      title: 'Thorough Consultation Process',
      paragraph:
        'Our journey begins with an in-depth conversation to understand your design preferences, overarching goals, and the broader vision you hold for your website. This initial consultation serves as the foundation for a design that resonates with your unique identity.'
    },
    {
      title: 'Empowering Client-Centric Design Exploration',
      paragraph:
        'Moving beyond conventional practices, we empower you to actively participate in the design process. Through sketching sessions, you can visually articulate your ideas, providing an additional layer of understanding that guides our design team towards crafting a truly personalized web experience.'
    },
    {
      title: 'Reference Examples and Nuanced Color Preferences',
      paragraph:
        "You are encouraged to share not only the websites that inspire you but also the specific elements that capture your imagination. We delve into the nuances, including detailed discussions on color preferences, ensuring that every aspect aligns seamlessly with your vision. Alternatively, for those who prefer a hands-off approach, we're more than equipped to take the reins, allowing trust to flourish."
    },
    {
      title: 'Engaging Iterative Feedback Loop',
      paragraph:
        'We believe in the power of collaboration and maintain an iterative feedback loop. Weekly updates keep you in the loop about the evolving design, fostering an environment where your insights are actively sought and valued.'
    },
    {
      title: 'Consistent Design Updates for Transparency',
      paragraph:
        'Transparency is key. Our commitment extends to regular design updates every 1-2 weeks, providing you with a comprehensive view of the ongoing progress. This approach ensures that feedback can be provided at crucial stages, allowing for timely adjustments.'
    },
    {
      title: 'Wait, there is more!',
      paragraph: {
        par1: "Explore beyond the surface—what you've glimpsed so far is just the tip of the iceberg. For a deeper understanding and a wealth of information, delve into the",
        par2: 'Web Design Manual.',
        par3: "There's more awaiting your discovery!"
      }
    }
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu">
        <WebDesignCoverSection />
        {paragraphs.map((para) => (
          <Fragment key={para.title}>
            <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
            <ServiceParagraph
              title={para.title}
              paragraph={para.paragraph}
              pdfFile="web-design-manual"
            />
          </Fragment>
        ))}
        <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
        <ReadyToChatSection />
        <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
      </div>
    </div>
  )
}

export default WebDesignPage
