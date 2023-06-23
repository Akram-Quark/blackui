import Vue from "vue";
import VueI18n from "vue-i18n";
import ar from "./ar";
import en from "./en";
Vue.use(VueI18n);

const messages = {
  en: en,
  ar: ar,
};

const i18n = new VueI18n({
  locale: "en", // set locale
  messages, // set locale messages
});

export default i18n;
