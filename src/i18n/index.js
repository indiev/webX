import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en';
import ko from './locales/ko';

i18n
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    defaultLocale: 'en',
    fallbackLng: 'en',
    resources: {
      en,
      ko
    },
    interpolation: {
      escapeValue: false
    },
    react: {
      wait: true
    }
  });

export default i18n;
