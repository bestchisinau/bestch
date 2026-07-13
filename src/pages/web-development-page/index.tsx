import { Fragment } from 'react'
import WebDevCoverSection from './sections/wev-dev-cover-section'
import ReadyToChatSection from '../landing-page/sections/ready-to-chat-section'
import ServiceParagraph from '../../components/service-paragraph'

const WebDevelopmentPage = () => {
  const paragraphs = [
    {
      title: 'Understanding Your Vision',
      paragraph:
        "Before we embark on this exciting venture together, we'll engage in a conversation to comprehend your goals, timeline, and budget. Your insights are invaluable, guiding us to create a digital solution that perfectly aligns with your aspirations."
    },
    {
      title: 'Transparent Development Process',
      paragraph:
        'Once your design is in our capable hands, the development journey begins. Expect regular updates every week, providing insights into our progress. Your flexibility in scheduling meetings is important to us.'
    },
    {
      title: 'Open Channels for Ideas',
      paragraph:
        "Your input is invaluable. Feel free to share any ideas you believe will enhance your website. Collaboration is key, and we're here to incorporate your insights into the development process."
    },
    {
      title: 'Visualization Options',
      paragraph:
        'Should you feel inclined, sketch out your vision! While entirely optional, your drawings can offer an additional layer of understanding in shaping your website.'
    },
    {
      title: 'Final Touches Based on Your Feedback',
      paragraph:
        "Once the product is ready for your review, take your time exploring. Let us know any changes, additions, or removals you'd like. Your satisfaction is our priority."
    },
    {
      title: 'Wait, there is more!',
      paragraph: {
        par1: "Explore beyond the surface—what you've glimpsed so far is just the tip of the iceberg. For a deeper understanding and a wealth of information, delve into the",
        par2: 'Web Development Manual.',
        par3: "There's more awaiting your discovery!"
      }
    }
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu">
        <WebDevCoverSection />
        {paragraphs.map((para) => (
          <Fragment key={para.title}>
            <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
            <ServiceParagraph
              title={para.title}
              paragraph={para.paragraph}
              pdfFile="web-development-manual"
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

export default WebDevelopmentPage
