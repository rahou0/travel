import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translationEN.json";
import translationFR from "./locales/fr/translationFR.json";
import translationAR from "./locales/ar/translationAR.json";

//the translations
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
};
i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
