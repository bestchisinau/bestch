import { Fragment } from 'react'
import SeoCoverSection from './sections/seo-cover-section'
import ReadyToChatSection from '../landing-page/sections/ready-to-chat-section'
import ServiceParagraph from '../../components/service-paragraph'

const SeoPage = () => {
  const paragraphs = [
    {
      title: 'Strategic Precision',
      paragraph:
        'Tailored strategic planning aligned with specific business objectives and target demographics.'
    },
    {
      title: 'Meticulous Optimization',
      paragraph:
        'Rigorous on-page optimization and technical proficiency ensuring search engine conformity and user-friendly experiences.'
    },
    {
      title: 'Content Excellence',
      paragraph:
        'Compelling content strategy, emphasizing relevance and quality, harmonizing with audience engagement and SEO objectives.'
    },
    {
      title: 'Transparent Reporting and Adaptation',
      paragraph:
        'Periodic, transparent reporting on key performance indicators, coupled with adaptive strategies to navigate evolving SEO landscapes.'
    },
    {
      title: 'Wait, there is more!',
      paragraph: {
        par1: "Explore beyond the surface—what you've glimpsed so far is just the tip of the iceberg. For a deeper understanding and a wealth of information, delve into the",
        par2: 'SEO Manual',
        par3: "There's more awaiting your discovery!"
      }
    }
  ]

  return (
    <div className="w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu">
        <SeoCoverSection />
        {paragraphs.map((para) => (
          <Fragment key={para.title}>
            <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
            <ServiceParagraph
              title={para.title}
              paragraph={para.paragraph}
              pdfFile="seo-manual"
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

export default SeoPage
