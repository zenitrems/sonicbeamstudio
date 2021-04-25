import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "animate.css";
import "ress";
import "./styles/style.scss";
import "@mdi/js";
import VueSplide from "@splidejs/vue-splide";
Vue.use(VueSplide);
import "@splidejs/splide/dist/css/themes/splide-default.min.css";


Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  vuetify,
  router,
}).$mount("#app");
