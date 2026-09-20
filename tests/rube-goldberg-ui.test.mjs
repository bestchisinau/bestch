import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server.js'
import { createServer } from 'vite'

let vite
let HeroSection
let ExplainerSection
let AboutBestSection
let SponsorsSection

before(async () => {
  vite = await createServer({ appType: 'custom' })
  await vite.ssrLoadModule('/src/lib/i18next.ts')
  ;({ default: HeroSection } = await vite.ssrLoadModule('/src/pages/rube-goldberg-page/sections/hero-section.tsx'))
  ;({ default: ExplainerSection } = await vite.ssrLoadModule('/src/pages/rube-goldberg-page/sections/explainer-section.tsx'))
  ;({ default: AboutBestSection } = await vite.ssrLoadModule('/src/pages/rube-goldberg-page/sections/about-best-section.tsx'))
  ;({ default: SponsorsSection } = await vite.ssrLoadModule('/src/pages/rube-goldberg-page/sections/sponsors-section.tsx'))
})

after(async () => {
  await vite?.close()
})

test('omits the redundant hero edition strip and photo captions', () => {
  const hero = renderToStaticMarkup(React.createElement(HeroSection))
  const explainer = renderToStaticMarkup(React.createElement(ExplainerSection))
  const about = renderToStaticMarkup(
    React.createElement(StaticRouter, { location: '/rube-goldberg' }, React.createElement(AboutBestSection))
  )

  assert.equal(hero.includes('BEST Machine Contest'), false)
  assert.equal(hero.includes('Ediția 10 / 2026'), false)
  assert.equal(explainer.includes('Studenți BEST lucrând împreună'), false)
  assert.equal(about.includes('Membri BEST la o activitate împreună'), false)
  assert.equal(about.match(/<img\b/g)?.length, 1, 'About BEST should keep only its wide community photo')
})

test('renders sponsor logos without visible text captions', () => {
  const sponsors = renderToStaticMarkup(React.createElement(SponsorsSection))

  assert.equal(sponsors.includes('<figcaption'), false)
  assert.match(sponsors, /alt="Klever"/)
  assert.match(sponsors, /alt="Ambalaj Market"/)
  assert.match(sponsors, /alt="Universitatea Tehnică a Moldovei"/)
  assert.match(sponsors, /alt="Cybercor"/)
  assert.match(sponsors, /alt="diez"/)
})
