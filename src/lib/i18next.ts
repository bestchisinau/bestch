import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import englishTranslation from '../languages/en.json'
import romanianTranslation from '../languages/ro.json'

const resources = {
  en: {
    translation: englishTranslation
  },
  ro: {
    translation: romanianTranslation
  },
  ru: {
    translation: romanianTranslation
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18next
