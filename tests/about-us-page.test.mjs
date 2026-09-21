import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom/server.js'
import { createServer } from 'vite'

let vite
let AboutUsPage
let store

before(async () => {
  globalThis.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {}
  }
  vite = await createServer({ appType: 'custom' })
  await vite.ssrLoadModule('/src/lib/i18next.ts')
  ;({ default: store } = await vite.ssrLoadModule('/src/store/store.ts'))
  ;({ default: AboutUsPage } = await vite.ssrLoadModule('/src/pages/about-us-page/index.tsx'))
})

after(async () => {
  await vite?.close()
})

test('renders only the centered work-in-progress placeholder', () => {
  const markup = renderToStaticMarkup(
    React.createElement(
      Provider,
      { store },
      React.createElement(StaticRouter, { location: '/about-us' }, React.createElement(AboutUsPage))
    )
  )

  assert.match(markup, />Work in progress</)
  assert.match(markup, /min-h-screen/)
  assert.match(markup, /items-center/)
  assert.match(markup, /justify-center/)
  assert.equal(markup.includes('AboutCoverSection'), false)
  assert.equal(markup.match(/<section\b/g)?.length, 1)
})
