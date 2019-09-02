import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json'
import it from './translations/it.json'

// the translations
const resources = {
  ...en,
  ...it
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;