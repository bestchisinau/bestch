export type CmsPage = {
  page_url: string
  title: string
  url_type: 'custom' | 'external'
  url: string
}

export const CMS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxnfxQ117Jk87oc9fjIy7KQeUyzO0Jw9-RTLJwLBjzOZeTbEsTGZk1Alk6o7vZ4Tuyp/exec'

const CMS_SESSION_KEY = 'best-chisinau-cms-pages'
let cache: Promise<CmsPage[]> | null = null

const isCmsPage = (value: unknown): value is CmsPage => {
  if (!value || typeof value !== 'object') return false

  const page = value as Record<string, unknown>

  return typeof page.page_url === 'string'
    && typeof page.title === 'string'
    && (page.url_type === 'custom' || page.url_type === 'external')
    && typeof page.url === 'string'
}

const clearSessionCache = () => {
  try {
    window.sessionStorage.removeItem(CMS_SESSION_KEY)
  } catch {
    // Ignore storage access failures and fall back to the network.
  }
}

const readSessionCache = (): CmsPage[] | null => {
  try {
    const stored = window.sessionStorage.getItem(CMS_SESSION_KEY)
    if (!stored) return null

    const parsed: unknown = JSON.parse(stored)
    if (Array.isArray(parsed) && parsed.every(isCmsPage)) return parsed

    clearSessionCache()
  } catch {
    clearSessionCache()
  }

  return null
}

const writeSessionCache = (pages: CmsPage[]) => {
  try {
    window.sessionStorage.setItem(CMS_SESSION_KEY, JSON.stringify(pages))
  } catch {
    // Keep the in-memory cache when session storage is unavailable.
  }
}

/**
 * Fetches the home-page link list from the Google Apps Script CMS.
 * Results are memoized in memory and session storage so each browser tab
 * fetches at most once. On failure it resolves to an empty list.
 */
export const fetchCmsPages = (): Promise<CmsPage[]> => {
  if (!cache) {
    const storedPages = readSessionCache()

    cache = storedPages
      ? Promise.resolve(storedPages)
      : fetch(CMS_ENDPOINT)
      .then((res) => {
        if (!res.ok) throw new Error(`CMS request failed: ${res.status}`)
        return res.json() as Promise<unknown>
      })
      .then((result) => {
        if (!Array.isArray(result) || !result.every(isCmsPage)) {
          throw new Error('CMS response has an invalid format')
        }

        writeSessionCache(result)
        return result
      })
      .catch((error) => {
        console.error('Failed to load CMS pages', error)
        cache = null // allow a retry on the next mount
        return []
      })
  }

  return cache
}

/** Normalizes a path for robust comparison: single leading slash, no trailing slash, lowercase. */
export const normalizePath = (path: string): string => {
  const trimmed = path.trim().replace(/\/+$/, '').replace(/^\/*/, '/')
  return trimmed.toLowerCase()
}
