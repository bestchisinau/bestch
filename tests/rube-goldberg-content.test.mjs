import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'

const contentPath = new URL('../src/pages/rube-goldberg-page/content.json', import.meta.url)

test('publishes the October 30 programme with the venue handoff', () => {
  assert.equal(existsSync(contentPath), true, 'Rube Goldberg content data should exist')

  const content = JSON.parse(readFileSync(contentPath, 'utf8'))

  assert.deepEqual(
    content.finalDay.map(({ start, end, venue }) => ({ start, end, venue })),
    [
      { start: '10:00', end: '10:15', venue: 'tent' },
      { start: '10:15', end: '10:50', venue: 'tent' },
      { start: '10:55', end: '12:15', venue: 'tent' },
      { start: '12:15', end: '12:30', venue: 'tent' },
      { start: '12:30', end: '13:20', venue: 'tent' },
      { start: '13:20', end: '13:55', venue: 'tent' },
      { start: '14:00', end: '15:00', venue: 'aula' }
    ]
  )
})

test('keeps unconfirmed visitor policies off the page', () => {
  assert.equal(existsSync(contentPath), true, 'Rube Goldberg content data should exist')

  const source = readFileSync(contentPath, 'utf8').toLocaleLowerCase('ro')

  assert.equal(source.includes('intrarea este gratuită'), false)
  assert.equal(source.includes('free admission'), false)
  assert.equal(source.includes('nu trebuie să te înregistrezi'), false)
  assert.equal(source.includes('no registration required'), false)
})
