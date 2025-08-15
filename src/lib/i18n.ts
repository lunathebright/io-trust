import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/../public/locales/en/common.json";
import koCommon from "@/../public/locales/ko/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: enCommon },
    ko: { common: koCommon },
  },
  lng: "ko",
  fallbackLng: "ko",
  interpolation: { escapeValue: false },
});

export default i18n;
