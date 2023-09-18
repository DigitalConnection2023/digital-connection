import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import vi from "./locales/vi.json";

// import this file to src/main or src/index

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ns: en,
        },
        vi: {
            ns: vi,
        },
    },
    defaultNS: "ns",
    lng: "vi",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
});
