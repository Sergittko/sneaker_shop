import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { ua as uaTranslation } from "../locales/ua/translation.js";
import { en as enTranslation } from "../locales/en/translation.js";

const resources = {
  en: {
    translation: {
      ...enTranslation,
    },
  },
  ua: {
    translation: {
      ...uaTranslation,
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    debug: false,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
