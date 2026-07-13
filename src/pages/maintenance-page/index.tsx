import { Fragment } from 'react'
import MaintenanceCoverSection from './sections/maintenance-cover-section'
import ReadyToChatSection from '../landing-page/sections/ready-to-chat-section'
import ServiceParagraph from '../../components/service-paragraph'

const MaintenancePage = () => {
  const paragraphs = [
    {
      title: 'Share Your Vision',
      paragraph:
        'We can only craft a visual masterpiece when we comprehend your definition of a digital masterpiece. By subscribing to our maintenance plan, we encourage you to articulate your vision, enabling us to grasp your ideas and objectives more profoundly. This ensures that any changes to your product align with your envisioned outcome.'
    },
    {
      title: 'The Overhauling Process Starts here',
      paragraph:
        'We initiate the transformation process based on your selected plan, enabling potential extensive modifications to your website, including complete redesigns, development, and SEO enhancements. If, at present, you do not intend to make significant alterations to the provided product in the near future, our basic maintenance plan offers a streamlined option. With your explicit consent and upon request, we will implement minor adjustments to the website as part of this plan.'
    },
    {
      title: 'Adjustments Based on your Insight',
      paragraph:
        'Throughout your subscription to our maintenance plans, you are encouraged to propose adjustments that you believe would significantly enhance your product. In the event that you are dissatisfied with a specific change implemented on your website, please reach out to us immediately. We foster a collaborative environment and are receptive to all your ideas and insights.'
    },
    {
      title: 'Wait, there is more!',
      paragraph: {
        par1: "Explore beyond the surface—what you've glimpsed so far is just the tip of the iceberg. For a deeper understanding and a wealth of information, delve into the",
        par2: 'Maintenance Manual',
        par3: "There's more awaiting your discovery!"
      }
    }
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu">
        <MaintenanceCoverSection />
        {paragraphs.map((para) => (
          <Fragment key={para.title}>
            <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
            <ServiceParagraph
              title={para.title}
              paragraph={para.paragraph}
              pdfFile="maintenance-manual"
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

export default MaintenancePage
