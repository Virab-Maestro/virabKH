import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {RU} from "./constants/ru"
import { EN } from "./constants/en"
import { BG } from "./constants/bg"

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
        en:{
            translation:{...EN}
        },
        ru:{
            translation:{...RU}
        },
        bg:{
          translation:{...BG}
        }
    },
  });

export default i18n;