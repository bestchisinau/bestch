import { useTranslation } from 'react-i18next'

export type Bi = { ro: string; en: string }

/**
 * The page keeps its copy inline (Romanian first, English second) instead of
 * going through the shared translation files.
 */
const useCopy = () => {
  const { i18n } = useTranslation()
  const english = i18n.language.startsWith('en')
  const copy = (ro: string, en: string) => (english ? en : ro)
  const pick = (text: Bi) => (english ? text.en : text.ro)

  return { english, copy, pick }
}

export default useCopy
