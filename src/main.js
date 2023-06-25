import Vue from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import FlagIcon from "vue-flag-icon";
import i18n from "@/language/translate.js";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";
import Toasted from "vue-toasted";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false;
library.add(faFacebook);
library.add(faInstagram);
library.add(faTelegram);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(FlagIcon);
Vue.use(Toasted, {
  duration: 2000,
});
console.log("env", JSON.stringify(process.env.VUE_APP_API_KEY));

Vue.use(VueGoogleMaps, {
  load: {
    key: `${process.env.VUE_APP_API_KEY}`,
  },
  installComponents: true,
});
new Vue({
  router,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
