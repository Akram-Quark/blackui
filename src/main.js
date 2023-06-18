import Vue from "vue";
import App from "./App.vue";
import "./assets/css/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;
library.add(faFacebook);
library.add(faInstagram);
library.add(faTelegram);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
