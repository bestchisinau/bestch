import { useEffect, useState, useRef, useCallback } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import i18next from 'i18next'
import gsap from 'gsap'

import Header from './components/header'
import Footer from './components/footer'
import LoadingScreen from './components/loading-screen'
import LandingPage from './pages/landing-page'
import AboutUsPage from './pages/about-us-page'
import RubeGoldbergPage from './pages/rube-goldberg-page'
import WebDevelopmentPage from './pages/web-development-page'
import WebDesignPage from './pages/web-design-page'
import SeoPage from './pages/seo-page'
import MaintenanceAndSupportPage from './pages/maintenance-page'
import PrivacyPolicyPage from './pages/privacy-policy-page'
import RcPage from './pages/rc-page'
import CmsRouter from './pages/cms-page'
import InteractiveCursorGSAP from './components/interactive-cursor-gsap'
import Dialog from './components/dialog'
import { fetchCmsPages } from './lib/cms'

/**
 * @todo: Use the CoverSection as a component.
 * @todo Optimize the table-of-contents component and the table-of-contents-section (see lodash?)
 */

const App = () => {
  const { pathname } = useLocation()
  const isHomePage = pathname === '/'
  const isRubeGoldbergPage = pathname === '/rube-goldberg'
  const [cmsReady, setCmsReady] = useState(false)
  const [zoomDone, setZoomDone] = useState(false)
  const [introDone, setIntroDone] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  // Stable identities so the LoadingScreen timeline effect is not restarted
  // on unrelated re-renders.
  const handleZoomComplete = useCallback(() => setZoomDone(true), []);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language')
    const language = storedLanguage ? storedLanguage : 'ro'

    if (language) i18next.changeLanguage(language);
  }, []);

  useEffect(() => {
    if (!isHomePage || introDone) return

    let active = true

    // fetchCmsPages never rejects (it resolves to [] on failure), so the
    // loading screen is guaranteed to disappear.
    fetchCmsPages().then(() => {
      if (active) setCmsReady(true);
    });

    return () => {
      active = false
    }
  }, [introDone, isHomePage])

  // Fade the page in once the logo zoom has finished.
  useEffect(() => {
    if (!isHomePage || !zoomDone || !contentRef.current) return

    const tween = gsap.to(contentRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power1.inOut",
    });

    return () => {
      tween.kill()
    }
  }, [isHomePage, zoomDone])

  const contentReady = !isHomePage || cmsReady || introDone

  return (
    <>
      {isHomePage && !introDone && (
        <LoadingScreen
          ready={cmsReady}
          onZoomComplete={handleZoomComplete}
          onComplete={handleIntroComplete}
        />
      )}
      {contentReady && (
        <div ref={contentRef} className={isHomePage && !zoomDone ? 'opacity-0' : ''}>
          <Header />
          <main>
            {!isRubeGoldbergPage && <InteractiveCursorGSAP />}
            <Dialog />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="about-us" element={<AboutUsPage />} />
              <Route path="rube-goldberg" element={<RubeGoldbergPage />} />
              <Route path="web-development" element={<WebDevelopmentPage />} />
              <Route path="web-design" element={<WebDesignPage />} />
              <Route
                path="maintenance-&-support"
                element={<MaintenanceAndSupportPage />}
              />
              <Route path="seo" element={<SeoPage />} />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="go/rc" element={<RcPage />} />
              <Route path="*" element={<CmsRouter />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
