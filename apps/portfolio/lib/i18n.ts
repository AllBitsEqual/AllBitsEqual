import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './translations/en'
import de from './translations/de'

const i18n = i18next.createInstance()

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    de: { common: de },
  },
  lng: 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
