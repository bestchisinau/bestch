import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const configUrl = new URL('../vercel.json', import.meta.url)

test('serves the SPA entry point for direct client-side route requests', async () => {
  const source = await readFile(configUrl, 'utf8').catch(() => {
    assert.fail('vercel.json should define the deployment routing contract')
  })
  const config = JSON.parse(source)
  const pathname = '/rube-goldberg'

  const fallback = config.rewrites?.find(({ source, destination }) => {
    return destination === '/index.html' && new RegExp(`^${source}$`).test(pathname)
  })

  assert.ok(fallback, `${pathname} should rewrite to /index.html`)
})
