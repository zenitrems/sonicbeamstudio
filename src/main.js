import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueCoreVideoPlayer from 'vue-core-video-player';

Vue.use(VueCoreVideoPlayer)

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
