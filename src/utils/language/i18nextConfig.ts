import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './json/en.json';
import id from './json/id.json';
import {LangCode} from './LanguageUtils';

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
} as const;

i18n.use(initReactI18next).init({
  debug: false,
  resources,
  lng: LangCode.id,
  fallbackLng: LangCode.id,
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
