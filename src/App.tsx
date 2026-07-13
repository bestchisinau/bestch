import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import i18next from 'i18next'

import Header from './components/header'
import Footer from './components/footer'
import LandingPage from './pages/landing-page'
import WebDevelopmentPage from './pages/web-development-page'
import WebDesignPage from './pages/web-design-page'
import SeoPage from './pages/seo-page'
import MaintenanceAndSupportPage from './pages/maintenance-page'
import PrivacyPolicyPage from './pages/privacy-policy-page'
import PageNotFound from './pages/404-page'
import InteractiveCursorGSAP from './components/interactive-cursor-gsap'
import Dialog from './components/dialog'

/**
 * @todo: Use the CoverSection as a component.
 * @todo Optimize the table-of-contents component and the table-of-contents-section (see lodash?)
 */

const App = () => {
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    const language = storedLanguage ? storedLanguage : navigator.language.split('-')[0]

    if (language) i18next.changeLanguage(language)
  }, [])

  return (
    <>
      <Header />
      <main>
        <InteractiveCursorGSAP />
        <Dialog />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="web-development" element={<WebDevelopmentPage />} />
          <Route path="web-design" element={<WebDesignPage />} />
          <Route path="maintenance-&-support" element={<MaintenanceAndSupportPage />} />
          <Route path="seo" element={<SeoPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
