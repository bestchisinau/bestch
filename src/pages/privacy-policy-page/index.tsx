import { useTranslation } from 'react-i18next'
import data from './data/introduction-data.json'

import IntroductionSection from './sections/introduction-section'
import TableOfContents from '../../components/table-of-contents'
import SummaryOfKeyPoints from './sections/summary-of-key-points'
import TableOfContentsSection from './sections/table-of-contents-section'
import WhatInfoWeCollect from './sections/what-info-we-collect'
import HowWeProcessInfo from './sections/how-we-process-info'
import ShareInfo from './sections/share-info'
import CookiesAndTracking from './sections/cookies-and-tracking'
import InfoTransfer from './sections/info-transfer'
import KeepInfo from './sections/keep-info'
import InfoFromMinors from './sections/info-from-minors'
import PrivacyRights from './sections/privacy-rights'
import NonTracking from './sections/non-tracking'
import UpdatesToNotice from './sections/updates-to-notice'
import ContactUs from './sections/contact-us'
import ManipulateData from './sections/manipulate-data'

const PrivacyPolicyPage = () => {
  const { t } = useTranslation()

  return (
    <section className="max-w-[1400px] mx-auto text-white xl:px-[75px] px-[18px] transform-gpu text-2xl md:pt-[220px] pt-[110px]">
      <h1 className="md:text-9xl text-6xl text-center">{t(data.title)}</h1>
      <h4 className="text-xl mb-20 text-center">{t(data.updated)}</h4>

      <div className="grid lg:grid-cols-[70%,30%] md:grid-cols-[60%,40%] grid-cols-1">
        <div className="font-light">
          <IntroductionSection />
          <SummaryOfKeyPoints />
          <TableOfContentsSection />
          <WhatInfoWeCollect />
          <HowWeProcessInfo />
          <ShareInfo />
          <CookiesAndTracking />
          <InfoTransfer />
          <KeepInfo />
          <InfoFromMinors />
          <PrivacyRights />
          <NonTracking />
          <UpdatesToNotice />
          <ContactUs />
          <ManipulateData />
        </div>

        <div className="h-full md:block hidden">
          <TableOfContents />
        </div>
      </div>

      <hr className="w-full h-[2px] bg-white opacity-40 rounded-full mt-[130px]" />
    </section>
  )
}

export default PrivacyPolicyPage
